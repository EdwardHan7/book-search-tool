# Answers to Technical Questions

## 1. Time Spent and Potential Additions

### a. Duration of Assignment
I spent approximately 8 hours on the coding assignment. The time was primarily allocated to setting up the project structure, implementing the core functionality, and ensuring basic accessibility and responsiveness of the UI.

### b. Additional Features with More Time
If I had more time, I would add the following features and enhancements to the solution:

- **Advanced Search Options:** Allow users to filter results by author, ISBN, and other metadata.
- **Responsive Design Improvements:** Refine the responsive design for an optimal experience across all devices.
- **Unit Testing:** Write more extensive tests to cover edge cases and improve reliability.
- **Performance Optimization:** Conduct detailed performance audits and optimize based on findings.

## 2. Useful Language Feature

The `async/await` syntax in modern JavaScript is a feature that I have leveraged in the project to handle asynchronous operations cleanly and concisely. It allows us to write code that performs asynchronous tasks, such as API calls, in a way that appears synchronous and is easier to read and maintain.

Here's an example of how I've used `async/await` in the project within the `SearchBar` component:

```javascript
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Assuming `onSearch` is an asynchronous function that fetches data from an API
  const handleSearch = async (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      // Wrap the call to `onSearch` with async/await for better readability and error handling
      try {
        await onSearch(searchTerm);
      } catch (error) {
        // Error handling if the API call fails
        console.error('Failed to search books:', error);
      }
    }
  };
};
export default SearchBar;
```

## 3. Tracking Performance Issues
To track down a page performance issue in production, I would take the following steps:

- **Profiling and Audits:** Use Chrome DevTools for profiling the page and running Lighthouse audits to pinpoint issues.
- **Load Testing:** Simulate high traffic to understand how the system behaves under stress.
Yes, I have had to track down performance issues in production before. By analyzing the data from these tools and making iterative improvements, we were able to significantly enhance the page performance.

## 4. Improvements to the Used API
The Open Library API is quite robust, but there's always room for improvement:

- **Rate Limiting Information:** Provide clear documentation and headers about rate limits to prevent consumer errors.
- **Caching Strategies:** Implement server-side caching for common requests to reduce load and improve response times.
- **Enhanced Search Capabilities:** Offer more granular search filters and full-text search capabilities.
- **Bulk Data Requests:** Allow for bulk data requests to reduce the number of separate calls needed for large datasets.

## 5. Please describe yourself using correctly formatted JSON.
```json
{
  "name": "Zhengxin(Edward) Han",
  "contact": {
    "phone": "(1) 647 869 0406",
    "location": "Toronto, Ontario, Canada",
    "email": "edwardhan456@gmail.com"
  },
  "workExperience": [
    {
      "title": " Full Stack Developer",
      "company": "Remobytes",
      "location": "Toronto, Ontario, Canada",
      "responsibilities": [
        "Spearheaded the design and execution of advanced React.js interfaces.",
        "Developed a feature-rich single-page application using React.",
        "Integrated RxJS for state management.",
        "Established a CI/CD pipeline using Git.",
        "Collaborated with UI designers and QA team."
      ]
    },
  ],
  "education": {
    "degree": "Bachelor of Science",
    "institution": "University of Toronto, St. George",
    "location": "Toronto, Ontario, Canada",
    "years": "Sep 2015 - Jun 2019"
  },
  "projects": [
    {
      "name": "IT project for a legal service company",
      "url": "https://trisamlegal.com/en"
    },
    // ... etc
  ],
  "technicalSkills": [
    "React", "Git", "JavaScript", "AWS", "OAuth", "Angular", "TypeScript", "SQL", "HTML", "Docker", "Python"
  ],
  "additionalInformation": [
    "Crypto Research",
    "Open Source Contribution",
    "Basketball",
    "Video games",
    "Travelling",
    "Singing"
  ]
}
```
