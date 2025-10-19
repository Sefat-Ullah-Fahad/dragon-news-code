import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3 ">
      <p className="text-base-100 bg-secondary px-3 py-3">Latest</p>
      <Marquee className="" pauseOnHover={true} speed={60}>
        <p className="font-semibold">
          আমার সোনার বাংলা আমি তোমায় ভালবাসি [Verse 1] চিরদিন তোমার আকাশ চিরদিন
          তোমার আকাশ তোমার বাতাস আমার প্রাণে— ও মা, আমার প্রাণে বাজায় বাঁশি
          [Chorus] সোনার বাংলা আমি তোমায় ভালবাসি [Verse 2] ও মা, ফাগুনে তোর
          আমের বনে ঘ্রাণে পাগল করে মরি হায়, হায় রে— ও মা, ফাগুনে তোর আমের বনে
          ঘ্রাণে পাগল করে ও মা, অঘ্রানে তোর ভরা খেতে কী দেখেছি আমি কী দেখেছি
          মধুর হাসি [Chorus] সোনার বাংলা আমি তোমায় ভালবাসি [Verse 3] কী শোভা,
          কী ছায়া গো! কী স্নেহ, কী মায়া গো! কী আঁচল বিছায়েছ বটের মূলে, নদীর
          কূলে কূলে
        </p>
        <p className="font-semibold">
          [Verse 4] মা, তোর মুখের বাণী আমার কানে লাগে সুধার মতো মরি হায়, হায়
          রে— মা, তোর মুখের বাণী আমার কানে লাগে সুধার মতো মা তোর বদন খানি মলিন
          হলে আমি নয়ন— ও মা, আমি নয়ন জলে ভাসি [Chorus] সোনার বাংলা আমি তোমায়
          ভালবাসি
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
