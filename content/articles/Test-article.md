---
title: Test article
publishedAt: 2023-04-30T22:00:00.000Z
description: Test article description
blocks:
  - content: |-
      DEFINE
          TABLE SampleData = { 2, 4, 4, 4, 5, 5, 7, 9 }
      EVALUATE
      SAMPLE ( 3, SampleData, [Value], ASC )
       
      EVALUATE
      SAMPLE ( 3, SampleData, [Value], DESC )
    lang: dax
    _template: code
  - file: /tina/pingu2.png
    _template: media
  - file: /tina/pingu.jpg
    _template: media
  - body: |
      ### Test rich text
    _template: richText
---















Test article body
