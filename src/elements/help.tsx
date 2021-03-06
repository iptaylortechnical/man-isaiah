import React from 'react';
import Line from './line';
import '../elements-css/help.css';

export default function Help(): JSX.Element {
  return (
    <>
      <Line />
      <Line main={<>* * * * * * * * * * * * * * * * * * * * * * * * * * * *</>} />
      <Line main={<>Welcome to isaiahtaylor.info!</>} />
      <Line />
      <Line main={<><b>NOTE:</b> If you are not a programmer, and this is</>} />
      <Line main={<>all confusing to you, my apologies. You can view my </>} />
      <Line main={<>normal resumé over at <a href="https://www.linkedin.com/in/isaiahptaylor/">LinkedIn</a>.</>} />
      <Line />
      <Line main={<>This is a shell written from scratch in React. To view</>} />
      <Line main={<>my resume, try typing <b>`man isaiah-taylor`</b>. Or, just</>} />
      <Line main={<>type a few letters and hit <b>tab</b> to auto-complete!</>} />
      <Line main={<><b>Ctrl-C</b> will give you a new line, and you can navigate</>} />
      <Line main={<>around the <b>man</b> page normally. Check <a href="https://wiki.gentoo.org/wiki/Man_page/Navigate">here</a> for</>} />
      <Line main={<>general instructions on navigating a <b>man</b> page.</>} />
      <Line />
      <Line main={<>Other commands:</>} />
      <Line main={<><b>exit</b>: exits to LinkedIn</>} />
      <Line main={<><b>git</b>: opens this project on github</>} />
      <Line />
      <Line main={<>Otherwise, enjoy your stay! If you're curious about how</>}/>
      <Line main={<>this was built, check it out on <a href="https://github.com/isaiahtaylor/man-isaiah">GitHub</a>. Please feel</>} />
      <Line main={<>free to submit any bugs or comments there.</>} />
      <Line />
      <Line main={<>You can get in touch with me via email at</>} />
      <Line main={<><a href="mailto:isaiah.p.taylor@gmail.com">isaiah.p.taylor@gmail.com</a>.</>} />
      <Line main={<>* * * * * * * * * * * * * * * * * * * * * * * * * * * *</>} />
      <Line />
    </>
  )
}
