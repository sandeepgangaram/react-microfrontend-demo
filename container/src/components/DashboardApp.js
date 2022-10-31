import { mount } from "dashboard/DashboardApp";
import React, { useRef, useEffect, useState } from "react";

const DashboardApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default DashboardApp;
