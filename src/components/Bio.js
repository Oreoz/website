import React from "react";
import { Column } from "../styled-components/Flex";
import Paragraph from "../styled-components/Paragraph";

const Bio = () => {
  return (
    <Column style={{ maxWidth: 750, marginTop: 16 }}>
      <Paragraph data-test-id="paragraph-1">
        I am a software engineer, passionate about JavaScript & building quality
        software. Most of my work so far has been done using modern JavaScript
        framworks like Ember.js and React.
      </Paragraph>

      <Paragraph data-test-id="paragraph-2">
        Outside of programming and taking care of my little one. I enjoy playing
        video games, board games, watching movies, listening to music, cycling &
        drinking craft beer with friends.
      </Paragraph>

      <Paragraph data-test-id="paragraph-3">
        If you&apos;re looking to contact me for profesionnal inquiries, your
        best bet would be LinkedIn.
      </Paragraph>
    </Column>
  );
};

export default Bio;
