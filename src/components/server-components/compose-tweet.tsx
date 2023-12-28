import React from "react";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { randomUUID } from "crypto";

const ComposeTweet = () => {
  async function submitTweet(formData: FormData) {
    "use server";
    const tweet = formData.get("tweet");
    console.log(tweet);
    const cookieStore = cookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({ name, value, ...options });
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.set({ name, value: "", ...options });
          },
        },
      },
    );
    const { data: userData, error: userError } = await supabase.auth.getUser();

    try {
      const { data: tweetData, error: tweetError } = await supabase
        .from("tweets")
        .insert({
          id: randomUUID(),
          text: tweet?.toString(),
          user_id: userData.user?.id,
        });

      if (tweetError) {
        console.log({ tweetError });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form action={submitTweet} className="flex flex-col w-full h-full py-2">
      <input
        name="tweet"
        type="text"
        placeholder="What is happening?!"
        className="border-none outline-none bg-transparent py-2 text-xl w-full text-white"
      />
      <div className="flex h-full items-end justify-end">
        <button
          type="submit"
          className="w-fit h-fit px-4 py-2 rounded-full bg-twitterColor hover:bg-opacity-70 transition duration-200 cursor-pointer font-semibold text-white"
        >
          Tweet
        </button>
      </div>
    </form>
  );
};

export default ComposeTweet;
