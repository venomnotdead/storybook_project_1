import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/stories/Button";
import InboxScreen from '@/components/inboxScreen/InboxScreen'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <>
  <InboxScreen/>
  </>;
}
