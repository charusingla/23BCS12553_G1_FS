import TextSimplifier from '../components/TextSimplifier';

export default function Home() {
  return (
    <div className="p-6 text-lg">
      <h2 className="text-2xl font-bold mb-4">Welcome to ReadEase</h2>
      <p>
        A dyslexia-friendly space for learning, journaling, reading, and playing
        educational games that boost confidence and joy.
      </p>
      {/* <img
        src="assets/dyslexia-learning.svg"
        alt="Learning Illustration"
        className="w-64 mt-6"
      /> */}
      
      <div className="min-h-screen bg-blue-50">
        <br />
        <TextSimplifier />
      </div>
    </div>
  );
}