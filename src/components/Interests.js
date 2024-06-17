const Interests = () => {
  return (
    <div className="section service" id="section-interests">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Interests</div>
        </div>
        {/* interests items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-poo" />
              </div>
              <div className="name">Lifestyle</div>
              <div className="text">
                From wild days to lazy weekends, the simplest things in life are worth sharing!
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-computer" />
              </div>
              <div className="name">Technology</div>
              <div className="text">
                Computer Science, Programming, and the latest tech trends and issues are my jam!
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-plane" />
              </div>
              <div className="name">Travel</div>
              <div className="text">
                Send me wherever! Certified "<i>kaladkarin</i>" and always ready for an adventure!
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-box" />
              </div>
              <div className="name">Unboxing</div>
              <div className="text">
                Unboxing and reviewing the latest gadgets and tech is my guilty pleasure!
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Interests;
