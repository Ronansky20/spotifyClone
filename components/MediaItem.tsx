"use client";

import { Song } from "@/types";

interface MediaItemProps {
    data: Song;
    onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = () => {
    return ( 
        <div>
            Media item
        </div>
     );
}
 
export default MediaItem;