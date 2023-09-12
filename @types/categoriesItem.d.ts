export type PlaylistItem = {
  href: string;
  id: string;
  name: string;
  icons: Array<{
    url: string;
    height: number;
    width: number;
  }>;
};
