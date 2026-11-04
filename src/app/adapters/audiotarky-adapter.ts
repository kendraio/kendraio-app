export interface AudiotarkyTrackRecord {
  id: string;
  title: string;
  artist: string;
  album?: string;
  streamUrl: string;
  artworkUrl?: string;
  durationSeconds?: number;
  paymentPointer?: string;
}

export interface KendraioPlayerItem {
  id: string;
  title: string;
  creator: string;
  albumTitle: string;
  audioSrc: string;
  coverImage: string;
  duration: number;
  monetizationPointer: string | null;
  sourceProvider: "audiotarky";
}

export function mapAudiotarkyTrackToPlayerItem(
  track: AudiotarkyTrackRecord
): KendraioPlayerItem {
  if (!track?.id || !track?.streamUrl) {
    throw new Error("Invalid Audiotarky track record: missing id or streamUrl");
  }
  return {
    id: String(track.id),
    title: String(track.title ?? "Untitled"),
    creator: String(track.artist ?? "Unknown Artist"),
    albumTitle: String(track.album ?? ""),
    audioSrc: String(track.streamUrl),
    coverImage: String(track.artworkUrl ?? ""),
    duration: Number(track.durationSeconds ?? 0),
    monetizationPointer: track.paymentPointer ? String(track.paymentPointer) : null,
    sourceProvider: "audiotarky",
  };
}
