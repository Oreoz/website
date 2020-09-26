import React, { FC } from "react";

const Bio: FC = () => {
  return (
    <div className="flex flex-col mt-4">
      <p className="text-justify mb-3" data-test-id="paragraph-1">
        I am a software engineer, passionate about JavaScript & building quality
        software. Most of my work so far has been done using modern JavaScript
        in the browser using Ember.js and React.
      </p>

      <p className="text-justify mb-3" data-test-id="paragraph-2">
        Outside of programming and taking care of my little one. I enjoy playing
        video games, board games, watching movies, listening to music, cycling &
        drinking craft beer with friends.
      </p>

      <p className="text-justify mb-3" data-test-id="paragraph-3">
        If you&apos;re looking to contact me for profesionnal inquiries, your
        best bet would be LinkedIn.
      </p>
    </div>
  );
};

export default Bio;
