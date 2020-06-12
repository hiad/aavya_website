const sources = ({ mobile, desktop }) => ([
      mobile,
      {
            ...desktop,
            media: `(min-width: 768px)`,
      },
]);


export default sources;