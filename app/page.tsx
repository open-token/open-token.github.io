import VideoHero from '@/components/VideoHero';
import Providers from '@/components/Providers';
import MediaShowcase from '@/components/MediaShowcase';
import UseCases from '@/components/UseCases';
import Impact from '@/components/Impact';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-gray-950">
      <VideoHero />
      <MediaShowcase />
      <Providers />
      <UseCases />
      <Impact />
      <CallToAction />
      <Footer />
    </main>
  );
}
