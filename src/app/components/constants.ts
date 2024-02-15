export const MenuLinks = [
    {
      name: "Accueil",
      href: "#",
      active:"home"
    },
    {
      name: "investir/Epargner",
      href: "#",
      active:"invest"
    },
    {
      name: "blog",
      href: "#",
      active:"blog"
    },
  ];

 export const SocialsNetworks = [
    {
      name: "Instagram",
      href: "#",
      icon:"/img/socials/IG.png"
    },
    {
      name: "Twitter",
      href: "#",
      icon:"/img/socials/Twitter.png"
    },
    {
      name: "Youtube",
      href: "#",
      icon:"/img/socials/Youtube.png"
    },
    {
      name: "LinkedIn",
      href: "#",
      icon:"/img/socials/LinkedIn.png"
    },
  ];


export default function screenW() {
      const screeWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    return (
      screeWidth
    )
  }
  