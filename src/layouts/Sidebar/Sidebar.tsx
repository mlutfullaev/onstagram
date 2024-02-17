"use client";

import cls from "./Sidebar.module.scss";
import Link from "next/link";
import {
  ExploreI,
  ExploreOutlineI,
  HomeI,
  HomeOutlineI,
  InstagramI, InstagramShortI,
  MessengerI, MessengerOutlineI, NewPostI, NotificationsI, NotificationsOutlineI, ProfileI, ReelsI, ReelsOutlineI,
  SearchI,
  SearchOutlineI
} from "@/assets/icons";
import SidebarSearch from "@/components/SidebarSearch/SidebarSearch";
import {useRouter} from "next/navigation";
import {ReactElement, useState} from "react";

type ItemT = {
  icon: ReactElement,
  activeIcon: ReactElement,
  name: string,
  route?: string,
  component?: ReactElement
}
const items: ItemT[] = [
  {
    icon: <HomeI />,
    activeIcon: <HomeOutlineI />,
    name: 'Home',
    route: '/',
  },
  {
    icon: <SearchI />,
    activeIcon: <SearchOutlineI />,
    name: 'Search',
    component: <SidebarSearch />,
  },
  {
    icon: <ExploreI />,
    activeIcon: <ExploreOutlineI />,
    name: 'Explore',
    route: '/explore'
  },
  {
    icon: <ReelsI />,
    activeIcon: <ReelsOutlineI />,
    name: 'Reels',
    route: '/reels'
  },
  {
    icon: <MessengerI />,
    activeIcon: <MessengerOutlineI />,
    name: 'Messages',
    route: '/direct'
  },
  {
    icon: <NotificationsI />,
    activeIcon: <NotificationsOutlineI />,
    name: 'Notifications',
    component: <SidebarSearch />,
  },
  {
    icon: <NewPostI />,
    activeIcon: <NewPostI />,
    name: 'Create',
    component: <SidebarSearch />,
  },
  {
    icon: <ProfileI />,
    activeIcon: <ProfileI />,
    name: 'Profile',
    route: '/profile'
  },
]

export default function Sidebar() {
  const [component, setComponent] = useState<ReactElement | boolean>(false)
  const router = useRouter()

  const clickHandler = (item: ItemT) => {
    if (item.route) {
      router.push(item.route)
      setComponent(false)
    } else if (item.component) {
      setComponent(item.component)
    }
  }

  return (
    <div className={`${cls.inner} ${component ? cls.componentActive : ''}`}>
      <div className={cls.left}>
        <div className={cls.logo}>
          <Link href='/'>
            <InstagramI className={cls.long} />
            <InstagramShortI className={cls.short} />
          </Link>
        </div>
        <div className={cls.content}>
          {
            items.map(item => (
              <div
                key={item.name}
                className={cls.item}
                onClick={() => clickHandler(item)}
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))
          }
        </div>
      </div>
      {
        component && <div className={cls.right}>
          {component}
        </div>
      }
    </div>
  );
}
