export const navigationRoot = (icons: any) => {
  let obj = {
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Feed',
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: icons[0],
                  selectedIconColor: 'tomato',
                  text: 'Feed',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Map',
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: icons[1],
                  selectedIconColor: 'tomato',
                  text: 'Map',
                },
              },
            },
          },
        ],
      },
    },
  };
  return obj;
};
