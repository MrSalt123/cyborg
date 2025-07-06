'use client';

import { useState } from 'react';
import Intro from '@/components/Intro';
import HomePage from './HomePage'; // or '@/components/HomePage' depending on your layout

export default function Page() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      {!introFinished && <Intro onFinish={() => setIntroFinished(true)} />}
      {introFinished && <HomePage />}
    </>
  );
}
