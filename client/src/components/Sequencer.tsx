import { useStudioStore } from '../state/useStudioStore';

export default function Sequencer() {
  const tracks = useStudioStore((s) => s.tracks);
  return (
    <div className="p-4 border rounded bg-gray-800 text-white">
      <h2 className="text-xl mb-2">Sequencer</h2>
      {tracks.length === 0 && (
        <p className="text-sm text-gray-400">No tracks yet</p>
      )}
      <ul>
        {tracks.map((t) => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>
    </div>
  );
}
