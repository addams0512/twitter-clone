"use client";

import React, { useCallback } from "react";
import type { SupabaseClient, User } from "@supabase/supabase-js";
import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/lib/supabase.types";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";

type SupabaseContext = {
  supabase: SupabaseClient<Database>;
};

export const Context = createContext<SupabaseContext | undefined>(undefined);

const SupabaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
  const router = useRouter();

  const onAuthStateChangedCallback = useCallback(() => {
    router.refresh();
  }, [router]);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(onAuthStateChangedCallback);

    supabase.auth.getSession().then((res) => {
      if (!res.data.session) {
        setModalOpen(true);
        return;
      }
      setUser(res.data.session.user);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [onAuthStateChangedCallback, supabase]);

  return (
    <Context.Provider value={{ supabase }}>
      <>
        <Toaster />
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsLoading(true);

                try {
                  // Check if the username is already exist
                  const { data: usernameData, error: usernameError } =
                    await supabase
                      .from("profiles")
                      .select()
                      .eq("username", username.trim());

                  if (usernameError) {
                    console.log({ usernameError });
                  }

                  if (usernameData && usernameData?.length > 0) {
                    console.log({ usernameData });
                    return toast.error("username already exists");
                  }

                  // Sign in up and get the magic link to sign in
                  const { data: signUpData, error: signUpError } =
                    await supabase.auth.signInWithOtp({
                      email: email.trim(),
                      options: {
                        data: {
                          username,
                        },
                      },
                    });

                  console.log({ signUpData });

                  if (signUpError) {
                    return toast.error(signUpError.message);
                  }
                } catch (errorLogin) {
                  console.log({ errorLogin });
                }

                toast.success("Magic link sent successfully");
                setIsLoading(false);
              }}
            >
              <h3 className="text-lg my-1">Please sign in to continue</h3>
              <Input
                type="email"
                className="my-2"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="text"
                className="my-2"
                min={3}
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="text"
                className="my-2"
                value={fullName}
                placeholder="Fullname"
                onChange={(e) => setFullName(e.target.value)}
              />

              <p className="text-sm text-gray-900 my-2">
                You will receive a login magic link here!
              </p>
              <div className="flex justify-end w-full">
                <Button disabled={isLoading}>Login</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
        {children}
      </>
    </Context.Provider>
  );
};

export default SupabaseProvider;

export const useSupabase = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  }

  return context;
};
