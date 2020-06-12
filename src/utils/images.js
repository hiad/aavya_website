const sources = ({ mobile, tablet, desktop }) => ([
      mobile,
      {
            ...tablet,
            media: `(min-width: 768px)`,
      },
      {
            ...desktop,
            media: `(min-width: 1280px)`,
      },
]);


export default sources;