import Link from 'next/link'

export default function Page() {
  return <div>
    <div className="grid grid-cols-5 grid-rows-5 gap-4">
      <div className="col-span-5">Header</div>
      <div className="row-span-3 row-start-2">Playlists</div>
      <div className="col-span-3 row-span-3 row-start-2">Main Board</div>
      <div className="row-span-3 col-start-5 row-start-2">Music Info</div>
      <div className="col-span-5 row-start-5">Currently Playing footer</div>
    </div>
  </div>
}