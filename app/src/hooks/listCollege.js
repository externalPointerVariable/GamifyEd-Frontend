const listCollege = async () => {
    try {
      const res = await fetch("http://universities.hipolabs.com/search?country=India");
      const data = await res.json();
      return data
        .map((college) => college.name)
        .sort((a, b) => a.localeCompare(b));
    } catch (error) {
      console.error("Failed to fetch colleges", error);
      return [];
    }
  };
  
  export default listCollege;
  