import Head from 'next/head';

import Layout from '../components/ui/layout';
import HeroBlock from '../components/home/hero-block';
import FeaturesBlock from '../components/home/features-block';
import DownloadBlock from '../components/home/download-block';
import FaqBlock from '../components/home/faq-block';
import CallToActionBlock from '../components/home/call-to-action-block';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Bookmark Landing Page</title>
        <meta name='description' content='Bookmark Landing Page' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <HeroBlock />
      <FeaturesBlock />
      <DownloadBlock />
      <FaqBlock />
      <CallToActionBlock />
    </Layout>
  );
}
