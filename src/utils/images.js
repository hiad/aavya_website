const sources = ({ mobile, tablet, desktop }) => ([
      mobile,
      {
            ...tablet,
            media: `(max-width: 768px)`,
      },
      {
            ...desktop,
            media: `(max-width: 1280px)`,
      },
]);


export default sources;