import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { cookies } from "next/headers";
import { Subscription } from "@/lib/supabase/supabase.types";
import db from "@/lib/supabase/db";
import LogoutButton from "../global/logout-button";
import { LogOut } from "lucide-react";
import ModeToggle from "../global/mode-toggle";

interface UserCardProps {
  subscription: Subscription | null;
}

const UserCard: React.FC<UserCardProps> = async ({ subscription }) => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const response = await db.query.users.findFirst({
    where: (u, { eq }) => eq(u.id, user.id),
  });

  let avatarPath;
  if (!response) return;

  if (!response.avatarUrl) avatarPath = "";
  else {
    avatarPath = supabase.storage
      .from("avatars")
      .getPublicUrl(response.avatarUrl).data.publicUrl;
  }

  const profile = {
    ...response,
    avatarPath: avatarPath,
  };

  return (
    <article
      className='hidden
    sm:flex
    justify-center
    items-center
    px-4
    py-2
    dark:bg-Neutrals/neutrals-12
    rounded-3xl
    '>
      <aside className='flex justify-center items-center gap-2'>
        <div className='flex flex-col'>
          <span className='text-muted-foreground'>
            {subscription?.status === "active" ? "Pro Plan" : "Free Plan"}
          </span>
          <small
            className='w-[100px]
            overflow-hidden
            overflow-ellipsis
            '>
            {profile.email}
          </small>
        </div>
      </aside>
      <div className='flex items-center justify-center'>
        <LogoutButton>
          <LogOut />
        </LogoutButton>
        <ModeToggle />
      </div>
    </article>
  );
};

export default UserCard;
