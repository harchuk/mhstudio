import Sequencer from './components/Sequencer';
import PianoRoll from './components/PianoRoll';
import Mixer from './components/Mixer';
import { useStudioStore } from './state/useStudioStore';

function App() {
  const addTrack = useStudioStore((s) => s.addTrack);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 text-center text-2xl font-bold">Music Studio Online</header>
      <main className="p-4 grid gap-4 md:grid-cols-3">
        <div className="col-span-2 space-y-4">
          <button
            className="mb-4 px-4 py-2 bg-blue-600 rounded"
            onClick={() => addTrack('New Track')}
          >
            Add Track
          </button>
          <Sequencer />
          <PianoRoll />
        </div>
        <Mixer />
      </main>
    </div>
  );
}

export default App
