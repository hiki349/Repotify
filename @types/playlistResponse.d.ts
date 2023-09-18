import { PlaylistItem } from './playlistItem';

export type PlaylistsResponse = {
  message: string;
  playlists: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: PlaylistItem[];
  };
};
