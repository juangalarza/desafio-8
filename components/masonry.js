import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 1 }} cols={4}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <Image
            src={`${item.img}?w=100%&fit=crop&auto=format`}
            srcSet={`${item.img}?w=100%&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
    title: "Breakfast",
    alt: "Nothing",
  },
  {
    img: "https://images.unsplash.com/photo-1595461135849-bf08893fdc2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80",
    title: "Burger",
    alt: "Nothing",
  },
  {
    img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Camera",
    alt: "Nothing",
  },
  {
    img: "https://images.unsplash.com/photo-1512327536842-5aa37d1ba3e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Coffee",
    alt: "Nothing",
  },
  {
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    title: "Hats",
    alt: "Nothing",
  },
  {
    img: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    title: "Honey",
    alt: "Nothing",
  },
  {
    img: "https://images.unsplash.com/photo-1523730647456-cc896ae6243a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    title: "Basketball",
    alt: "Nothing",
  },
  {
    img: "https://images.unsplash.com/photo-1529353721-ae64f46030b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    title: "Fern",
    alt: "Nothing",
  },
];
