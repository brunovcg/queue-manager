const permissions = {
  users: {
    menu: {
      staff: true,
      superuser: true,
      user: true,
    },
    submenus: {
      changePassword: {
        staff: true,
        superuser: true,
        user: true,
      },
      ordersDeleteAll: {
        staff: true,
        superuser: true,
        user: false,
      },
      resetPassword: {
        staff: false,
        superuser: true,
        user: false,
      },
      createUser: {
        staff: false,
        superuser: true,
        user: false,
      },
      updateUser: {
        staff: false,
        superuser: true,
        user: false,
      },
    },
  },
  branches: {
    menu: {
      staff: false,
      superuser: true,
      user: false,
    },
    submenus: {
      createUnit: {
        staff: false,
        superuser: false,
        user: true,
      },
      deleteUnit: {
        staff: false,
        superuser: false,
        user: true,
      },
      updateUnit: {
        staff: false,
        superuser: false,
        user: true,
      },
    },
  },
  kitchens: {
    menu: {
      staff: false,
      superuser: true,
      user: false,
    },
    submenus: {
      createKitchen: {
        staff: false,
        superuser: false,
        user: true,
      },
      deleteKitchen: {
        staff: false,
        superuser: false,
        user: true,
      },
      updateKitchen: {
        staff: false,
        superuser: false,
        user: true,
      },
    },
  },
  display: {
    menu: {
      staff: true,
      superuser: true,
      user: false,
    },
  },
  chamador: {
    menu: {
      staff: false,
      superuser: false,
      user: true,
    },
  },
  info: {
    menu: {
      staff: true,
      superuser: true,
      user: true,
    },
    submenu: {
      sendMessage: {
        staff: true,
        superuser: true,
        user: true,
      },
    },
  },

  logout:{
    menu: {
        staff: true,
        superuser: true,
        user: true,
      },

  }
};

export default permissions;
