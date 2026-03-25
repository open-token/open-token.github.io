import VideoHeroZh from '@/components/zh/VideoHeroZh';
import ProvidersZh from '@/components/zh/ProvidersZh';
import MediaShowcaseZh from '@/components/zh/MediaShowcaseZh';
import UseCasesZh from '@/components/zh/UseCasesZh';
import ImpactZh from '@/components/zh/ImpactZh';
import CallToActionZh from '@/components/zh/CallToActionZh';
import FooterZh from '@/components/zh/FooterZh';

export default function HomeZh() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-gray-950">
      <VideoHeroZh />
      <MediaShowcaseZh />
      <ProvidersZh />
      <UseCasesZh />
      <ImpactZh />
      <CallToActionZh />
      <FooterZh />
    </main>
  );
}
