const Project = () => {
  return (
    <div className="bg-shade-4 font-althetics border border-accent-2 px-8 py-25">
      <h1 className="text-38 text-white font-600 mb-15">Projects</h1>
      <p className="text-shade-2 mb-15">
        Here's a glimpse of some of my recent and exciting projects. Each of
        them reflects my focus on user-centered design and my commitment to
        excellence in user experience.
      </p>
      <div className="gradient-border">
        <div className="gradient-border-inner">
          <h1 className="text-30 gradient-text">Salesunbox</h1>
          <p className="text-white">Project Description</p>
          <button className="gradient-border" >View</button>
        </div>
      </div>
      <div className="border border-white rounded-15">
        <div className="gradient-border rounded-15 px-20 py-10">
          <h1 className="gradient-text text-30">Salesunbox</h1>
          <p className="text-white">Project Description</p>
          <button className="border border-accent-2">View</button>
        </div>
        <div className="border-0.5 gradient-border px-20 py-10 rounded-15">
          <h1 className="gradient-text text-30">EsusuNest</h1>
          <p className="text-white">Project Description</p>
          <button className="border border-accent-2">View</button>
        </div>
        <div>
          <div className="border-0.5 gradient-border px-20 py-10 rounded-15">
            <h1 className="gradient-text text-30">Salesunbox Admin</h1>
            <p className="text-white">Project Description</p>
            <button className="border border-accent-2">View</button>
          </div>
          <div className="border-0.5 border-shade-2 px-20 py-10 rounded-15">
            <h1 className="gradient-text text-30">Coachmie</h1>
            <p className="text-white">Project Description</p>
            <button className="border border-accent-2">View</button>
          </div>
          <div className="border-0.5 border-shade-2 px-20 py-10 rounded-15">
            <h1 className="gradient-text text-30">Propco</h1>
            <p className="text-white">Project Description</p>
            <button className="border border-accent-2">View</button>
          </div>
          <div className="border-0.5 border-shade-2 px-20 py-10 rounded-15">
            <h1 className="gradient-text text-30">KBeauty</h1>
            <p className="text-white">Project Description</p>
            <button className="border border-accent-2">View</button>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <p className="text-center text-shade-2 capitalize mt-18 font-600">
        see all projects
      </p>
    </div>
  );
};

export default Project;
