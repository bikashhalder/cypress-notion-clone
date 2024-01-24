import { HomeIcon, SettingsIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import Settings from "../settings/settings";
import Trash from "../trash/trash";

interface NativeNatigationProps {
  myWorkspaceId: string;
  className?: string;
  //   getSelectedElement?: (selection: string) => void;
}

const NativeNatigation: React.FC<NativeNatigationProps> = ({
  myWorkspaceId,
  className,
}) => {
  return (
    <nav className={twMerge("my-2", className)}>
      <ul className='flex flex-col gap-2'>
        <li>
          <Link
            className='group/native flex text-Neutrals/neutrals-7 transition-all gap-2'
            href={`/dashboard/${myWorkspaceId}`}>
            <HomeIcon />
            <span>My Workspace</span>
          </Link>
        </li>
        <Settings>
          <li className='group/native flex text-Neutrals/neutrals-7 transition-all cursor-pointer gap-2'>
            <SettingsIcon />
            <span>Settings</span>
          </li>
        </Settings>
        <Trash>
          <li className='group/native flex text-Neutrals/neutrals-7 transition-all gap-2'>
            <TrashIcon />
            <span className='ml-1'>Trash</span>
          </li>
        </Trash>
      </ul>
    </nav>
  );
};

export default NativeNatigation;
