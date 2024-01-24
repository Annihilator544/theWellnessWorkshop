function Marquee() {
    return (
      // eslint-disable-next-line react/no-unknown-property
      <marquee scrollamount="10" className="bg-gradient-to-r from-[#C94277] to-[#F4743B] flex justify-between" style={{ color: 'white', padding: '10px', fontSize: '20px' }}>
      <span style={{marginRight: '100px'}}>Theoretical Courses and Seminars</span>
      <span style={{marginRight: '100px'}}>Individual Approach to Students</span>
      <span style={{marginRight: '100px'}}>Team of Professional Teachers</span>
      <span style={{marginRight: '100px'}}>Supportive Community of Fellow</span>
      <span>Team of Professional Teachers</span></marquee>
    );
  }
  
  export default Marquee