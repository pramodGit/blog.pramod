import { BlogPost } from "../models/blog-post.model"
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    route: 'architecture_api_leadership',
    title: 'Architecture & Leadership',
    summary: 'Architecture, API Integraion and Leadership. Full Stack [Node] Topic : Some thoughts on Architecture, API Integraion and Leadership',
    publishedDate: '2026-02-14',
    readTime: '4 min read',
    author: 'Pramod Kumar',
    category: 'Architecture',
    tags: ['Architecture', ' Leadership']
  },
  {
    id: 2,
    route: 'understanding_closures',
    title: 'Understanding Closures',
    summary: 'A closure is a function that retains access to its lexical scope even when the function is executed outside of that scope.',
    publishedDate: '2026-02-28',
    readTime: '4 min read',
    author: 'Pramod Kumar',
    category: 'JavaScript',
    tags: ['JavaScript', ' Closure']
  },
  {
    id: 3,
    route: 'useReducer_hook_better_than_useState',
    title: '"useReducer" vs "useState"',
    summary: 'Structured approach to deal with multiple state transitions.',
    publishedDate: '2026-03-05',
    readTime: '4 min read',
    author: 'Pramod Kumar',
    category: 'React',
    tags: ['React', ' Hooks']
  },
  {
    id: 4,
    route: 'vulnerability_prevention_in_react',
    title: 'Vulnerability prevention in React',
    summary: '10 points to know about vulnerability prevention in React app',
    publishedDate: '2026-03-15',
    readTime: '4 min read',
    author: 'Pramod Kumar',
    category: 'React',
    tags: ['React']
  },
  {
    id: 5,
    route: 'ecommerce_product_management',
    title: 'Ecommerce product management',
    summary: 'E-commerce product management involves overseeing the lifecycle of products sold.',
    publishedDate: '2026-03-30',
    readTime: '4 min read',
    author: 'Pramod Kumar',
    category: 'E-Commerce',
    tags: ['E-Commerce']
  },
  {
    id: 6,
    route: 'useRef_uses_in_React',
    title: '"useRef uses in React',
    summary: 'useRef hook is a versatile tool prevents re-renders',
    publishedDate: '2026-04-05',
    readTime: '4 min read',
    author: 'Pramod Kumar',
    category: 'React',
    tags: ['React']
  },
  {
    id: 7,
    route: 'digital_transformation',
    title: 'Digital transformation',
    summary: 'Technology to change how an organization operates fundamentally.',
    publishedDate: '2026-04-15',
    readTime: '4 min read',
    author: 'Pramod Kumar',
    category: 'Digital',
    tags: ['Digital']
  },
  {
    id: 8,
    route: 'style_parent_element_based_on_its_children',
    title: 'Replace JavaScript toggling',
    summary: 'The CSS way wins when you only need styling',
    publishedDate: '2026-04-30',
    readTime: '4 min read',
    author: 'Pramod Kumar',
    category: 'CSS',
    tags: ['CSS']
  },
  {
    id: 9,
    route: 'system_design',
    title: 'System design',
    summary: 'The discipline of building reliable, scalable, maintainable software systems',
    publishedDate: '2026-05-05',
    readTime: '4 min read',
    author: 'Pramod Kumar',
    category: 'Node',
    tags: ['System']
  },
  {
    id: 10,
    route: 'frontend_architecture_1',
    title: 'Frontend Architecture: Which framework should I use',
    summary: 'Frontend development today is mostly about choosing the right trade-offs for your app, not just picking a trendy framework.',
    publishedDate: '2026-05-15',
    readTime: '4 min read',
    author: 'Pramod Kumar',
    category: 'Frontend',
    tags: ['Frontend']
  },
  {
    id: 11,
    route: 'frontend_architecture_2',
    title: 'PWAs often use offline-first architecture.',
    summary: 'PWA (Progressive Web App) is a type of web app that often uses that approach.',
    publishedDate: '2026-05-30',
    readTime: '4 min read',
    author: 'Pramod Kumar',
    category: 'PWA',
    tags: ['Frontend', ' PWA']
  },
  {
    id: 12,
    route: 'javascript_sorting',
    title: 'JavaScript Sorting',
    summary: 'In JavaScript, sorting is primarily done using the built-in sort() method or the non-mutating toSorted() method.',
    publishedDate: '2026-06-05',
    readTime: '4 min read',
    author: 'Pramod Kumar',
    category: 'Node',
    tags: ['Node', ' Stream']
  },
  {
    id: 14,
    route: 'node_streaming_chunking_offset_tracking',
    title: 'Node : Streaming + Chunking + Offset Tracking',
    summary: 'Never load the whole file into memory. Use a streaming CSV reader.',
    publishedDate: '2026-06-16',
    readTime: '8 min read',
    author: 'Pramod Kumar',
    category: 'Node',
    tags: ['Node', ' Stream']
  }
];
export const blogPostDetails = {
  'useReducer_hook_better_than_useState': {
      heading: 'useReducer vs useState',
      content: [        
        '<p>The <strong>useReducer</strong> hook is a powerful alternative to <strong>useState</strong> for managing state in functional components. While <strong>useState</strong> is ideal for handling simple, local state changes, <strong>useReducer</strong> is better suited for scenarios involving more complex state logic or multiple related state transitions. It offers a more structured approach, similar to Redux-style state management, within a component.</p>',
        '<h2>When to use useReducer:</h2>', 
        '<p>When state logic becomes complex and difficult to manage with useState. The <strong>useReducer</strong> hook is a React function that manages complex state logic within functional components. <br />It offers a structured approach to state management, particularly when dealing with multiple state transitions or asynchronous updates.<br />The <strong>useReducer</strong> hook requires 2 arguments:</p>',
        '<ul><li><h3>reducer</h3> - A function that specifies how the state should be updated based on actions. <br /> The reducer function is a pure function that defines how the state changes in response to dispatched actions. <br /> It must be pure, meaning it does not have side effects or modify its arguments. Take the current state and action as arguments, return the next state. <br /> It takes two arguments: <ol><li><h4>state</h4> - The current state.</li><li><h4>action</h4> - An object describing the update to be performed. It usually includes a type property and optionally a payload containing additional data.</li></ol></li>',
        '<ul><li><h3>initialState</h3> - The initial value of the state. It can be a simple value or an object.</li></ul>',
        '<h2>useReducer return values:</h2>',
        '<ul><li><h3>state</h3> - The current state value.</li><li><h3>dispatch</h3> - A function used to send actions to the reducer. Calling dispatch triggers a state update based on the provided action.</li></ul>',
        '<h3>Code: </h3>',
      ]
  },
  'understanding_closures': {
    heading: 'Understanding Closures',
    content: [
      '<ul><li><h2>Lexical Scoping:</h2><p>Closures rely on <strong>lexical scoping</strong>, where the scope of a variable is determined by where its written in the code.</p></li><li><h2>Inner Functions:</h2><p>A closure is created when an inner function is defined within an outer function.</p></li><li><h2>Access to Outer Scope:</h2><p>The inner function has access to the outer function"s variables, even after the outer function has returned.</p></li><li><h2>Private Variables:</h2><p>Closures are often used to emulate private variables in JavaScript, as the outer function"s variables are not directly accessible from outside.</p><li><h2>State Maintenance:</h2><p>They can maintain state between function calls, making them useful for creating counters or other stateful behaviors.</p></li></ul>',
      '<h2>Common Uses of Closures:</h2>',
      '<ol><li><h3>Callbacks</h3> - They are used in callbacks to access variables from the outer scope.</li><li><h3>Data Hiding</h3> - Closures enable the creation of private variables, enhancing data security.</li><li><h3>Emulating Private Methods</h3> - They can be used to create private methods within objects.</li><li><h3>Creating Iterators</h3> - Closures can be used to create functions that act as iterators.</li></ol>',
      '<h2>Potential Pitfalls:</h2>',
      '<ul><li><h3>Memory Leaks:</h3> - If closures capture variables that are no longer needed, they can cause memory leaks.</li></ul>',
      `<pre><code>_closureCode_</code></pre>`
    ]
  },
  'architecture_api_leadership': {
    heading: 'Full Stack [Node] Topic : Some thoughts on Architecture, API Integraion and Leadership',
    content: [
      '<h2>Architecture & Design:</h2>',
      '<h3>How would you design a scalable Node.js application?</h3>',
      '<ul><li>Use clustering or horizontal scaling (e.g., PM2, Docker)</li><li>Load balancers (Nginx/ELB)</li><li>Async non-blocking logic</li><li>Stateless services with centralized cache/storage (e.g., Redis)</li><li>Modular structure + service separation (monolith/microservices)</li></ul>',
      '<h3>What design patterns have you used in your Node.js projects?</h3>',
      '<p>Module, Singleton, Factory, Observer, Strategy, Middleware, Repository, Decorator</p>',
      '<h3>How do you manage configuration across environments (dev, staging, production)?</h3>',
      '<ul><li>Use .env files and dotenv package</li><li>Environment variables in CI/CD pipelines</li><li>Config files per environment</li><li>Avoid hardcoding secrets (use Vault, AWS Secrets Manager, etc.)</li></ul>',
      '<h3>What’s your approach to structuring a large Node.js project?</h3>',
      '<h4>Typical structure:</h4>',
      '<pre>/controllers<br />/routes<br />/models<br />/middlewares<br />/services<br />/utils<br />/config<br />/tests<br />Use layers (controller → service → DAO) to separate concerns.</pre>',
      '<h3>How do you implement logging and monitoring in Node applications?</h3>',
      '<ul><li>Use winston, pino, or bunyan for logging</li><li>Use tools like Prometheus + Grafana, or Datadog, Sentry for monitoring</li><li>Log levels (info, warn, error, debug)</li><li>Request logging middleware (e.g., morgan)</li></ul>',
      '<h3>What tools do you use for profiling and performance tuning in Node.js?</h3>',
      '<ul><li>--inspect with Chrome DevTools</li><li>clinic.js for advanced profiling</li><li>heapdump, memwatch for memory leaks</li><li>APM tools: New Relic, AppDynamics</li></ul>',
      '<h2>API & Integration</h2>',
      '<h3>How do you handle versioning in RESTful APIs?</h3>',
      '<ul><li>URI versioning: /api/v1/users</li><li>Header versioning: Accept: application/vnd.myapp.v1+json</li><li>Avoid breaking changes; deprecate gradually</li></ul>',
      '<h3>What are best practices for securing APIs in Node.js?</h3>',
      '<ul><li>Input validation (Joi, express-validator)</li><li>Use HTTPS</li><li>Rate limiting (express-rate-limit)</li><li>Authentication (OAuth, JWT)</li><li>Helmet.js to set security headers</li><li>Sanitize input to prevent XSS/SQLi</li></ul>',
      '<h3>How do you implement rate limiting and throttling?</h3>',
      '<p>Use libraries like express-rate-limit or Redis-backed solutions like rate-limiter-flexible:</p>',
      "<pre>const rateLimit = require('express-rate-limit');<br />app.use(rateLimit({ windowMs: 1 * 60 * 1000, max: 100 }));</pre>",
      '<h3>What are some tools you use for API testing?</h3>',
      '<ul><li>Postman</li><li>Swagger/OpenAPI + Swagger UI</li><li>Jest + Supertest for automated tests</li><li>Newman for CI testing with Postman collections</li></ul>',
      '<h3>How do you handle pagination, filtering, and sorting in APIs?</h3>',
      '<h4>Standard query params:</h4>',
      '<pre>GET /users?page=2&limit=10&sort=name&filter[role]=admin</pre>',
      '<p>Implement at DB layer with Mongo’s .skip() and .limit() or SQL OFFSET/LIMIT.</p>',
      '<h2>Leadership & Collaboration</h2>',
      '<h3>How do you mentor junior developers on your team?</h3>',
      '<ul><li>Regular 1-on-1s</li><li>Pair programming</li><li>Code reviews with constructive feedback</li><li>Encourage asking questions and learning through small features</li></ul>',
      '<h3>How do you prioritize technical debt and feature delivery?</h3>',
      '<ul><li>Maintain a tech debt backlog</li><li>Align debt pay-down with sprint planning</li><li>Use metrics like "code churn" and bug frequency</li><li>Advocate for a % of sprint time for tech improvements</li></ul>',
      '<h3>How do you ensure code quality and consistency across your team?</h3>',
      '<ul><li>Linting (eslint)</li><li>Pre-commit hooks (husky, lint-staged)</li><li>Code reviews</li><li>Shared coding guidelines</li><li>Automated tests in CI</li></ul>',		
      '<h3>What’s your approach to conducting code reviews?</h3>',
      '<ul><li>Focus on readability, correctness, and scalability</li><li>Avoid nitpicking; use linters for formatting</li><li>Encourage comments and alternatives</li><li>Teach, don’t block unless necessary</li></ul>',		
      '<h3>How do you handle conflict within a development team?</h3>',
      '<ul><li>Listen actively to both sides</li><li>Focus on facts, not emotion</li><li>Facilitate collaboration over blame</li><li>Escalate only when necessary</li><li>Promote psychological safety</li></ul>',
    ]
  },
  'vulnerability_prevention_in_react': {
    heading: 'Vulnerability prevention in React app',
    content: [
      '<h2>10 points to know about vulnerability prevention in React app:</h2>',
      '<h3>Protect Against Cross-Site Scripting (XSS)</h3>',
      '<ul><li>React escapes content by default (JSX output is sanitized).</li><li>Avoid using dangerously SetInnerHTML unless absolutely necessary, and always sanitize the input if you do.</li><li>Use libraries like DOMPurify if you must render raw HTML:<pre>import DOMPurify from "dompurify";<br />const safeHtml = DOMPurify.sanitize(dirtyHtml);</pre></li></ul>',
      '<h3>Secure API Communications</h3>',
      '<ul><li>Always use HTTPS.</li><li>Implement authentication (e.g., OAuth, JWT tokens) and authorization properly.</li><li>Protect against CSRF attacks if your app interacts with cookies — use SameSite cookies or CSRF tokens.</li></ul>',
      '<h3>Prevent Code Injection</h3>',
      '<ul><li>Never trust client-side inputs.</li><li>Validate and sanitize all user inputs both on client and server sides.</li><li>Example: validate form fields before sending to backend.</li></ul>',
      '<h3>Handle Dependencies Carefully</h3>',
      '<ul><li>Keep dependencies updated (React and npm packages).</li><li>Regularly audit your packages:<pre>npm audit fix</pre></li><li>Use tools like Snyk, Dependabot, or npm audit.</li></ul>',
      '<ul><li>Don’t expose sensitive information in error messages.</li><li>Use generic error messages for users and detailed logs for the server side only.</li><li>Catch errors with Error Boundaries in React:<pre>class ErrorBoundary extends React.Component {<br /> state = { hasError: false }; <br /> static getDerivedStateFromError(error) { <br /> return { hasError: true };<br />}<br />componentDidCatch(error, errorInfo) {<br /> // Log error to a service<br />}<br />render() {<br /> if (this.state.hasError) {<br />  return <h4>Something went wrong.</h4>;<br /> }<br /> return this.props.children;<br /> }<br />}</pre></li></ul>',
      '<h3>Content Security Policy (CSP)</h3>',
      '<ul><li>Add a CSP header in your web server or meta tags to restrict sources of scripts, images, etc.<pre>&lt;meta http-equiv="Content-Security-Policy" content="default-src `self`; script-src `self`;"&gt;</pre></li></ul>',
      '<h3>Authentication Best Practices</h3>',
      '<ul><li>Store tokens securely (e.g., HttpOnly cookies are safer than localStorage).</li><li>Implement multi-factor authentication (MFA) if possible.</li><li>Rotate secrets and tokens periodically.</li></ul>',
      '<h3>Limit Client-Side Data Exposure</h3>',
      '<ul><li>Never store sensitive information (like API keys, secrets) in the frontend code.</li><li>Use environment variables carefully (only expose what is necessary with REACT_APP_ prefix).</li></ul>',
      '<h3>Protect Routing</h3>',
      '<ul><li>If you use client-side routing (like React Router), always check user roles/permissions when accessing protected routes.<pre>&lt;Route path="/admin" element={isAdmin ? <AdminPage /> : <Navigate to="/login" />} /&gt;</pre></li></ul>',
      '<h3>Session Management</h3>',
      '<ul><li>Implement session timeout and re-authentication mechanisms.</li><li>Logout users properly (clear tokens, reset app state).</li></ul>',
    ]
  },
  'ecommerce_product_management': {
    heading: 'Ecommerce product management',
    content: [
      '<p>E-commerce product management involves overseeing the lifecycle of products sold through online platforms—from planning and listing to inventory tracking and optimization. Here are the <strong>essential steps</strong> in e-commerce product management:</p>',
      '<h2>Product Planning</h2>',
      '<ul><li><h3>Market research</h3>: Identify customer needs, trends, and competitor offerings.</li><li><h3>Product selection</h3>: Choose which products to sell based on demand, margin, and logistics.</li><li><h3>Supplier coordination</h3>: Source reliable suppliers or plan for in-house production.</li></ul>',
      '<h2>Product Data Management</h2>',
      '<ul><li><h3>Create product records</h3>: Include names, SKUs, pricing, descriptions, and specs.</li><li><h3>Standardize attributes</h3>: Size, color, material, etc., should follow a consistent structure.</li><li><h3>Upload media</h3>: High-quality images, videos, and 360° views.</li></ul>',
      '<h2>Product Listing</h2>','<ul><li><h3>Write compelling descriptions</h3>: SEO-friendly, benefits-focused, and clear.</li><li><h3>Categorize products</h3>: Use logical categories and tags for easy navigation.</li><li><h3>Optimize for search</h3>: Use relevant keywords in titles, descriptions, and metadata.</li></ul>',
      '<h2>Pricing Management</h2>',
      '<ul><li><h3>Set pricing strategies</h3>: Competitive pricing, psychological pricing, dynamic pricing, etc.</li><li><h3>Monitor competitors</h3>: Adjust prices in response to market changes.</li><li><h3>Handle discounts/promotions</h3>: Time-bound deals, coupon codes, bundles.</li></ul>',
      '<h2>Inventory Management</h2>','<ul><li><h3>Track stock levels</h3>: Real-time syncing with warehouse or dropshipping systems.</li><li><h3>Reorder thresholds</h3>: Automate reorder points to avoid stockouts.</li><li><h3>Multi-channel sync</h3>: Ensure consistent inventory across all platforms (e.g., Amazon, Shopify, Etsy).</li></ul>',
      '<h2>Order & Fulfillment Integration</h2>','<ul><li><h3>Automate order processing</h3>: From order capture to shipping.</li><li><h3>Coordinate logistics</h3>: Shipping, delivery, returns, and exchanges.</li><li><h3>Communicate with customers</h3>: Real-time updates and tracking.</li></ul>',
      '<h2>Product Performance Monitoring</h2>',
      '<ul><li><h3>Track KPIs</h3>: Conversion rate, bounce rate, cart abandonment, product views.</li><li><h3>A/B testing</h3>: Test variations in titles, images, or prices.</li><li><h3>Use analytics tools</h3>: Google Analytics, built-in eCommerce dashboards.</li></ul>',
      '<h2>Customer Feedback & Improvement</h2>','<ul><li><h3>Collect reviews/ratings</h3>: Monitor and respond to feedback.</li><li><h3>Improve based on feedback</h3>: Adjust descriptions, fix quality issues, improve delivery times.</li><li><h3>Enable Q&A sections</h3>: Allow potential customers to ask product-related questions.</li></ul>',
      '<h2>Product Lifecycle Management</h2>','<ul><li><h3>Launch new products</h3>: Plan and execute product launches.</li><li><h3>Phase out slow movers</h3>: Discount or delist products that underperform.</li><li><h3>Manage seasonal items</h3>: Schedule availability and promotions around seasonality.</li></ul>',
      '<h2>Compliance & Legal</h2>','<ul><li><h3>Ensure regulatory compliance</h3>: Product safety, certifications, and consumer rights.</li><li><h3>Platform policies</h3>: Adhere to the rules of each marketplace (Amazon, eBay, etc.).</li></ul>',
    ]
  },
  'useRef_uses_in_React': {
    heading: 'The useRef hook is a versatile tool primarily used for working with refs.',
    content: [
    	'<p>In React, the useRef hook is a versatile tool primarily used for working with refs, or references to DOM elements or persistent values. Here’s a quick breakdown of its uses when it comes to ref context:</p>',
    	'<h2>useRef uses in React</h2>',
      '<h3>DOM Access</h3>',
    	'<ul><li>You can use useRef to get a reference to a DOM element so you can interact with it directly—like focusing an input, measuring size, or triggering animations.<pre>const inputRef = useRef(null);<br />useEffect(() => {<br />  inputRef.current.focus();<br />}, []);<br />return &lt;input ref={inputRef} /&gt;;</li></ul>',
      '<h3>Persisting Values Without Re-render</h3>',
    	'<ul><li>useRef is also handy for storing mutable values that don’t cause re-renders when updated. This is especially useful for timers, flags, or previous state values.<pre>const renderCount = useRef(0);<br />useEffect(() => {<br />  renderCount.current += 1;<br />});',
    	'<h3>Sharing Refs Between Components</h3>',
    	'<ul><li>In some advanced patterns, you might pass a ref to a child component using forwardRef. This lets you control or observe a child component’s DOM node from the parent.<pre>const CustomInput = forwardRef((props, ref) => {<br />  return &lt;input ref={ref} {...props} /&gt;;<br />});<br />const App = () => {<br />  const inputRef = useRef(null);<br />  return &lt;CustomInput ref={inputRef} /&gt;;<br />};',
      '<h3>Storing Contextual Data</h3>',
    	'<ul><li>Though useRef isn’t a replacement for React Context, it can be useful for keeping around contextual references that don’t need to trigger updates—like a WebSocket instance or scroll position.<pre>&lt;div ref={observerRef}&gt;<br />  {onScrollVisible && &lt;LazyComponent /&gt;}<br />&lt;/div&gt;</li></ul>'
    ]
  },
  'digital_transformation': {
    heading: 'Technology to change how an organization operates fundamentally.',
    content: [
    	"<p>Digital transformation is the process of using technology to fundamentally change how an organization operates, creating new or modified products, services, and operations to meet evolving market needs. It's not just about adopting new technologies; it's about rethinking how business is done, engaging with customers, and creating value.</p>",
    	'<h2>Key Aspects of Digital Transformation:</h2>',
      '<h3>Technology Adoption:</h3>',
    	'<ul><li>Incorporating technologies like cloud computing, AI, big data analytics, and mobile solutions.</li></ul>',
      '<h3>Business Process Reimagining:</h3>',
    	'<ul><li>Redesigning existing processes and creating new ones to improve efficiency and customer experience.</li><ul>',
    	'<h3>Customer-Centricity:</h3>',
    	'<ul><li>Focusing on understanding and meeting customer needs through personalized experiences and digital channels.</li></ul>',
      '<h3>Cultural Shift:</h3>',
    	'<ul><li>Requiring organizations to adapt their culture to embrace innovation, experimentation, and a willingness to embrace change.</li></ul>',
      '<h3>Continuous Improvement:</h3>',
    	'<ul><li>A mindset of ongoing innovation and adaptation to stay competitive in the digital age.</li></ul>',
      '<h3>Examples of Digital Transformation:</h3>',
      '<ul><li>A company using AI to personalize customer recommendations.</li><li>An organization implementing a cloud-based CRM system to improve customer relationship management.</li><li>A retailer using data analytics to optimize inventory and pricing.</li><li>A government agency using online portals to streamline services for citizens.</li></ul>',
      '<h2>Benefits of Digital Transformation:</h2>',
      '<h3>Increased Efficiency:</h3>',
      '<ul><li>Automating processes and streamlining workflows can lead to significant cost savings and improved productivity.</li></ul>',
      '<h3>Enhanced Customer Experience:</h3>',
      '<ul><li>Personalized interactions, online channels, and self-service options can improve customer satisfaction and loyalty.</li></ul>',
      '<h3>New Revenue Streams:</h3>',
      '<ul><li>Digital transformation can enable companies to create new products and services, enter new markets, and explore new business models.</li></ul>',
      '<h3>Improved Agility:</h3>',
      '<ul><li>Digital technologies can help organizations become more adaptable to changing market conditions and customer demands.</li></ul>',
      '<h3>Data-Driven Decision Making:</h3>',
      '<ul><li>Leveraging data analytics can provide valuable insights for better decision-making and strategic planning.</li></ul>',
      '<h2>Digital Transformation Startup Pathway</h2>',
      '<h3>Problem Identification & Market Research</h3>',
      '<ul><li>Identify industry pain points (e.g., inefficient legacy systems, lack of data visibility, slow decision-making).</li><li>Target verticals like healthcare, finance, logistics, manufacturing, or SMBs.</li><li>Research competitors and gaps in current solutions.</li></ul>',
      '<h3>Define Your Niche, Focus on a specific area like:</h3>',
      '<ul><li>Cloud migration</li><li>Workflow automation (e.g., RPA)</li><li>Data analytics & BI</li><li>AI/ML for decision-making</li><li>Digital twins / IoT integrations</li><li>CRM/ERP modernization</li></ul>',
      '<h3>Validate the Idea</h3>',
      '<ul><li>Interview potential customers.</li><li>Develop a minimum viable product (MVP) or prototype.</li><li>Gather feedback to refine your offering.</li></ul>',
      '<h3>Assemble a Core Team, Include skills in:</h3>',
      '<ul><li>Software engineering / DevOps</li><li>Business process consulting</li><li>UX/UI design</li><li>Sales & customer success</li></ul>',
      '<h3>Build the Product</h3>',
      '<ul><li>Use agile methodologies.</li><li>Integrate scalable cloud infrastructure.</li><li>Focus on data security and compliance from the start.</li></ul>',
      '<h3>Pilot Program</h3>',
      '<ul><li>Offer free or discounted pilots to key early adopters.</li><li>Measure KPIs like cost savings, speed improvements, or ROI.</li><li>Iterate based on user feedback.</li></ul>',
      '<h3>Develop a Go-To-Market Strategy</h3>',
      '<ul><li>Choose between direct sales, channel partners, or a SaaS model.</li><li>Craft messaging around business outcomes, not just tech.</li><li>Build credibility with case studies and white papers.</li></ul>',
      '<h3>Fundraising (Optional), Bootstrap if possible, or pursue:</h3>',
      '<ul><li>Angel investors</li><li>Seed VCs with a focus on enterprise SaaS or B2B</li><li>Government grants for innovation</li></ul>',
      '<h3>Scale Operations</h3>',
      '<ul><li>Automate deployments and onboarding.</li><li>Hire support and customer success teams.</li><li>Focus on recurring revenue and retention metrics.</li></ul>',
      '<h3>Evolve and Expand</h3>',
      '<ul><li>Add new features/modules.</li><li>Expand to new verticals or regions.</li><li>Consider partnerships with larger tech firms.</li></ul>',
    ]
  },
  'style_parent_element_based_on_its_children': {
      heading: 'The simplest and most elegant solution — no JS, no framework needed!',
      content: [
        "<p>The CSS way wins when you only need styling — save JS/framework solutions for when you need logic or behavior tied to the image's presence.</p>",
        '<h2>:has() — The CSS Parent Selector</h2>',
        '<pre><small>/* Parent reacts to its content — pure CSS */</small> <br />.card:has(img) { <br />  border: 2px solid #3b82f6;<br />}</pre>',
        "<h2>That's it. The browser handles everything. More real-world examples:</h2>",
        '<pre><small>/* Form field highlights when input is focused */</small><br />\ .form-field:has(input:focus) {<br />\
        background: #f0f9ff;<br />\
        border-color: #3b82f6;<br />\}<br />\ <small>/* Nav item bold when child link is active */</small><br />\ .nav-item:has(.active) {<br />\
        font-weight: bold;<br />\
        border-left: 3px solid currentColor;<br />\}<br />\ <small>/* Section dims when a modal inside is open */</small><br />\  .section:has(.modal[open]) {<br />\
        filter: blur(2px);<br />\
        pointer-events: none;<br />\}<br />\  <small>/* Label style changes when input is invalid */</small><br />\ .field:has(input:invalid) label {<br />\
        color: red;<br />\}</pre>',
        "<h2>Vanilla JS</h2>",
        "<pre>document.querySelectorAll('.card').forEach(card => { <br /> if (card.querySelector('img')) {  <br />  card.classList.add('has-image'); <br /> }<br />});</pre>",
        '<h2>React / Angular style approach</h2>',
        '<pre>\ [Card] &larr; needs to know if it contains an image<br />\
          &#9492;&mdash; [img] &larr; the thing that triggers the parent&apos;s class\
        </pre>',
        "<h2>Comparison across all approaches:</h2>",
        '<style>\
          .compare-table{\
          width:100%;\
          border-collapse:collapse;\
          font-size:18px;\
          line-height:1.6;\
          margin:20px 0;\
          }\
          .compare-table th{\
          text-align:left;\
          padding:16px 12px;\
          border-bottom:1px solid #cfcfcf;\
          font-size:20px;\
          font-weight:700;\
          }\
          .compare-table td{\
          padding:16px 12px;\
          border-bottom:1px solid #d0d0d0d0;\
          vertical-align:middle;\
          }\
          .compare-table code{\
          background:#f3f3f3;\
          border:1px solid #e8e8e8;\
          border-radius:8px;\
          padding:4px 10px;\
          font-size:0.95em;\
          font-family:monospace;\
          color:#a12622;\
          }\
          .compare-table .highlight{\
          font-weight:700;\
          }\
          </style>\
          <table class="compare-table">\
          <tr>\
          <th>Approach</th>\
          <th>Code</th>\
          <th>Runs in</th>\
          </tr>\
          <tr>\
          <td>Vanilla JS</td>\
          <td><code>querySelector</code> + <code>classList.add</code></td>\
          <td>Runtime JS</td>\
          </tr>\
          <tr>\
          <td>React</td>\
          <td><code>className</code> prop / <code>Children</code></td>\
          <td>Render cycle</td>\
          </tr>\
          <tr>\
          <td>Angular</td>\
          <td><code>@ContentChild</code> / <code>@Input</code></td>\
          <td>Lifecycle hook</td>\
          </tr>\
          <tr>\
          <td class="highlight">CSS <code>:has()</code></td>\
          <td class="highlight">One selector</td>\
          <td class="highlight">Browser engine</td>\
          </tr>\
        </table>'
      ]
  },
  'system_design': {
    heading: "System design is the broader discipline of building reliable, scalable, maintainable software systems",
    content: [
      "<h2>It's about making good structural decisions for software at scale.</h2>",
      '<h3>The four main areas are:</h3>',
      "<p><strong>Distributed systems —</strong> what we've been exploring: consistency, replication, consensus, fault tolerance. Relevant when your data or computation is spread across machines.</p>",
      "<p><strong>Database design —</strong> choosing the right storage, designing schemas, indexing, transactions. Even a single-machine system has to think about this.</p>",
      "<p><strong>Application architecture —</strong> how you structure your code and services: monolith vs microservices, API design, caching, auth. This is about the shape of your application logic.</p>",
      "<p><strong>Infrastructure and reliability —</strong> load balancing, CDNs, observability, deployment pipelines. How your system actually runs in production and stays healthy.</p>",
      "<pre><code>_systemDesign_</code></pre>"
    ]
  },
  'frontend_architecture_1': {
    heading: "How should the app be built and delivered to users?",
    content: [
      "<h3>Modern frontend development is no longer just “Which framework should I use?” (like React, Vue, or Angular).<br />Now the bigger question is: How should the app be built and delivered to users?</h3>",
      "<p>That’s what “architecture choices” means. The terms mentioned are different ways to balance things like:</p>",
      "<ul><li>speed</li><li>SEO (Google search visibility)</li><li>server cost</li><li>user experience</li><li>offline access</li><li>complexity</li></ul>",
      "<h3>Here’s the simple breakdown:</h3>",
      "<ul><li><h5>CSR (Client-Side Rendering)</h5><p>The browser downloads JavaScript and builds the page on the user’s device.→ Good for highly interactive apps, but first load can feel slower.</p></li><li><h5>SSR (Server-Side Rendering)</h5><p>The server creates the page first, then sends ready-to-view HTML to the browser.→ Faster first load and better for SEO, but puts more work on the server.</p></li><li><h5>SSG (Static Site Generation)</h5><p>Pages are pre-built ahead of time and served as static files.→ Extremely fast and cheap to host, but harder for constantly changing content.</p></li>\
      <li><h5>Hydration</h5><p>After a page loads, JavaScript “activates” it so buttons and interactions work.→ Makes server-rendered pages interactive. Without hydration the page is dead, it is like a printed page converted as touchscreen.</p></li></ul>",
      "<ul><li><h5>Caching</h5><p>Saving data or pages temporarily so they don’t need to be rebuilt or refetched every time.→ Improves speed and reduces server load.</p></li></ul>",
      "<ul><li><h5>Offline support</h5><p>Making apps still work partially or fully without internet.→ Useful for mobile-like web apps.</p></li></ul>",
      "<p>The app is designed to keep working even when the internet is slow or completely gone.→ It works because the browser has special tools that save files and data locally.</p>"
    ]
  },
  'frontend_architecture_2': {
    heading: "Offline-first is not PWA (Progressive Web App)",
    content: [
      "<h3>Offline-First: How It Really Works</h3>\
      <blockquote>The app is designed to keep working even when the internet is slow or completely gone.</blockquote>\
      <p>It works because the browser has special tools that save files and data locally.</p>\
      <h3>The Main Pieces</h3>\
      <h3>1. Service Workers = The Manager</h3>\
      <p>A <strong>Service Worker</strong> is a small background script the browser runs separately from the webpage.</p>",
      "<p>Its job is to:</p>\
      <ul><li>Watch network requests</li><li>Decide whether to:\
          \<ul>\
            \<li>Use saved files/data\</li>\
            \<li>Fetch fresh data from the internet\</li>\
          \</ul>\
        \</li>\
        \<li>Keep parts of the app working offline\</li>\
      \</ul>\
      <p>Simple analogy:\</p>",
      "\<blockquote>\
      It’s like a smart traffic controller deciding where data should come from.\
      \</blockquote>\
      <p>Example:\</p>\
      <ul>\
        \<li>User opens app without internet\</li>\
        \<li>\
          Service Worker says:\
          “I already saved this page earlier, so I’ll load the saved version.”\
        \</li>\
      \</ul>\
      \<h3>2. Cache API = Saved Website Files\</h3>\
      <p>\
      This stores things like:\
      \</p>\
      <ul>\
        \<li>HTML\</li>\
        \<li>CSS\</li>\
        \<li>JavaScript\</li>\
        \<li>Images\</li>\
      \</ul>\
        <p>\
      So the app can load quickly or even offline.\
      \</p>\
      <p>Think of it like:\</p>\
      <blockquote>\
      Keeping copies of important website files in a local folder.\
      \</blockquote>\
      <h3>3. IndexedDB = Local Database\</h3>\
      <p>\
      This stores actual app data, such as:\
      \</p>\
      <ul>\
        \<li>Messages\</li>\
        \<li>Notes\</li>\
        \<li>Tasks\</li>\
        \<li>User settings\</li>\
      \</ul>\
      <p>\
      Even without internet, the app can still show and edit data locally.\
      \</p>\
      <p>Think of it like: A mini database inside the browser.</p>\
      <h3>Full Flow\</h3>\
      <ol>\
        \<li>User opens app\</li>\
        \<li>\
          Service Worker checks:\
          \<ul>\
            \<li>“Do I have saved files/data?”\</li>\
          \</ul>\
        \</li>\
        \<li>\
          If yes:\
          \<ul>\
            \<li>Load from cache or IndexedDB\</li>\
          \</ul>\
        \</li>\
        \<li>\
          If internet exists:\
          \<ul>\
            \<li>Fetch fresh data and update local storage\</li>\
          \</ul>\
        \</li>\
      \</ol>\
      <p>\
      That’s how apps like:\
      \</p>\
      \<ul>\
        \<li>Spotify Web</li>\
        \<li>Google Docs</li>\
        \<li>Twitter/X</li>\
        \<li>PWAs</li>\
      \</ul>\
      \<p>\
      can still work when connection is weak or offline.\
      \</p>"
    ]
  },
  'javascript_sorting': {
    heading: 'In JavaScript, you can sort arrays using sort() or toSorted().',
    content: [
      '<h2>By default, they sort items as text (strings), so numbers may not be sorted correctly unless you provide a comparison function.</h2>',
      '<p>To sort data accurately, you must pass a compare function. Here is exactly how to achieve ascending and descending orders for numbers, strings, and objects.</p>',
      '<h3>1. Sorting Numbers</h3>',
      '<p>When sorting numbers, your comparison function should return a negative, zero, or positive value to determine the order.',
      '<h4>Ascending Order (Smallest to Largest)</h4>',
      '<p>Subtract the second element (b) from the first element (a):</p>',
      '<pre><code><h3>Example</h3></code><code>_javascriptSorting_1</code></pre>',
      '<h4>Descending Order (Largest to Smallest)</h4>',
      '<p>Subtract the first element (a) from the second element (b)</p>',
      '<pre><code>_javascriptSorting_2</code></pre>',
      '<h3>2. Sorting Strings</h3>',
      '<p>For string collections, use the localeCompare() method. This provides robust alphabetical sorting that handles accents and case variations correctly.</p>',
      '<h4>Ascending Order (A to Z), Compare a against b</h4>',
      '<pre><code>_javascriptSorting_3</code></pre>',
      '<h4>Descending Order (Z to A), Compare b against a</h4>',
      '<pre><code>_javascriptSorting_4</code></pre>',
      '<h3>3. Sorting an Array of Objects</h3>',
      '<p>To sort a collection of objects, target the specific property key within your comparison function.</p>',
      '<h4>Ascending Order (by Number or String Property)</h4>',
      '<pre><code>_javascriptSorting_5</code></pre>',
      '<h4>Descending Order (by Number or String Property)</h4>',
      '<pre><code>_javascriptSorting_6</code></pre>',
      '<h3>Mutating vs Non-Mutating</h3>',
      '<ul><li><h3>sort(): Modifies the original array directly (in-place mutation).</h3></li><li><h3>toSorted(): Leaves the original array unchanged and returns a brand new sorted array.</h3></li></ul>'
    ]
  },
  'node_streaming_chunking_offset_tracking': {
    heading: 'Node : Streaming + Chunking + Offset Tracking',
    content: [
      '<h3>If limited resources available like 10 GB CSV file and only 512 MB RAM, you should never use fs.readFile() because it loads the entire file into memory. Use streams to process the file chunk by chunk.</h3>',
      '<h4>Wrong Approach: </h4>',
      `<pre><code>const fs = require('fs'); const data = fs.readFileSync('large.csv', 'utf8');</code></pre>`,
      '<h5>Memory usage ≈ 10 GB → process crashes.</h5>',
      '<h4>Stream-Based Approach: </h4>',
      `<pre><code>nodeStreamingCode1</code></pre>`,
      '<h5>Memory usage stays very low (few MB).</h5>',
      '<h4>Using csv-parser Package</h4>',
      '<h5>For real CSV parsing:</h5>',
      `<pre><code>npm install csv-parser</code></pre>`,
      `<pre><code>nodeStreamingCode2</code></pre>`,
      '<h4>Need Database Insert</h4>',
      `<h5>Don't insert one row at a time.</h5>`,
      '<h4>Batch Insert</h4>',
      `<pre><code>nodeStreamingCode3</code></pre>`,
      '<h5>Benefits:</h5>',
      '<ul><li>Fewer DB calls</li><li>Faster throughput</li><li>Lower memory</li></ul>',
      '<h4>Handling Backpressure</h4>',
      '<h5>For very large files:</h5>',
      `<pre><code>nodeStreamingCode4</code></pre>`,
      '<h5>pipeline() automatically manages errors and backpressure.</h5>',
      '<p>Backpressure occurs when the producer generates data faster than the consumer can process it.</p>',
      `<ul>
        <li>CSV Stream reads 10,000 rows/sec</li>
        <li>Database can insert only 1,000 rows/sec</li>
      </ul>`,
      '<h5>After a few seconds:</h5>',
      `<pre><code>
      Memory Buffer
      -------------
      Row 1001
      Row 1002
      Row 1003
      ...
      Row 500000
      </code></pre>

      <h5>Memory keeps growing and eventually:</h5>
      <pre><code>JavaScript heap out of memory</code></pre>
      <h5>or</h5>
      <pre><code>Process killed</code></pre>

      <h4>Solution: Pause and Resume</h4>`,
      `<pre><code>nodeStreamingCode5</code></pre>`,
      `<h5>Now:</h5>
      <pre><code>
      Read Row
      ↓
      Save to DB
      ↓
      Read Next Row
      </code></pre>
      <h5>The reader never outruns the database.</h5>

      <h3>What if the server crashes?</h3>

      <h4>This is a very common ETL/import problem.</h4>
      <h5>Suppose:</h5>
      <pre><code>
      10 GB CSV
      50 million rows
      </code></pre>
      <h5>You process:</h5>
      <pre><code>1 million rows completed</code></pre>
      <h5>Then:</h5>
      <pre><code>
      Server crashed
      Power failure
      Deployment restart
      </code></pre>
      <h5>You don't want to start again from row 1.</h5>

      <h4>Option 1: Store Last Processed Row Number</h4>
      <h5>Create a checkpoint table.</h5>`,
      `<pre><code>nodeStreamingCode6</code></pre>`,
      `<h5>After every batch:</h5>
      <pre><code>await updateCheckpoint(currentRow);</code></pre>
      <h5>Example:</h5>
      <pre><code>
      Batch 1 -> Row 1000
      Batch 2 -> Row 2000
      Batch 3 -> Row 3000
      </code></pre>
      <h5>Store:</h5>
      <pre><code>last_row = 3000</code></pre>

      <h4>On Restart</h4>
      <h5>Read checkpoint:</h5>

      <pre><code>const lastRow = await getCheckpoint();</code></pre>

      <h5>Skip rows until:</h5>

      <pre><code>currentRow > lastRow</code></pre>
      <h5>Then continue processing.</h5>

      <h4>Option 2: Store File Byte Offset</h4>
      <h5>For very large files, row skipping is slow.</h5>
      <h5>Store:</h5>

      <pre><code>stream.bytesRead</code></pre>
      <h5>Example:</h5>

      <pre><code>
      Processed till:
      Byte 4,523,123,123
      </code></pre>

      <h5>Save:</h5>

      <pre><code>offset = 4523123123</code></pre>

      <h4>Restart</h4>

      <pre><code>
      fs.createReadStream('large.csv', {
        start: offset
      });
      </code></pre>

      <h5>Node starts reading from that position.</h5>
      <h5>This is much faster than skipping millions of rows.</h5>

      <h4>Option 3: Idempotent Processing</h4>
      <h5>Suppose row contains:</h5>

      <pre><code>
      orderId,amount
      1001,500
      1002,700
      </code></pre>

      <h5>Use a unique key:</h5>

      <pre><code>orderId UNIQUE</code></pre>

      <h5>Insert: (PostgreSQL)</h5>
      <pre><code>
      INSERT ...
      ON CONFLICT DO NOTHING
      </code></pre>
      <h5>or Insert: (SQL)</h5>
      <pre><code>INSERT IGNORE</code></pre>

      <h5>Now even if the job restarts and reprocesses some rows:</h5>

      <pre><code>
      1001 already exists
      1002 already exists
      </code></pre>

      <h5>Database ignores duplicates.</h5>
      <h5>This is called idempotency.</h5>

      <h3>Production Architecture</h3>

      <pre>
      <code>
      10 GB CSV
        |
        v
      Read Stream
        |
        v
      Batch (1000 rows)
        |
        v
      DB Insert
        |
        +--> Save Checkpoint
            |
            +--> Row Number / Byte Offset

      If Crash
        |
        v
      Read Checkpoint
        |
        v
      Resume Processing
      </code></pre>
      <p>For ticket booking, eCommerce imports, payment reconciliation, and Kafka consumers, the combination of checkpointing + idempotent writes is the most reliable way to recover from crashes without losing progress or creating duplicates.</p>
      `
    ]
  }
};
export const nodeStreamingCode1 = `
  const fs = require('fs');
  const readline = require('readline');

  const stream = fs.createReadStream('large.csv');

  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity
  });

  rl.on('line', (line) => {
    // Process one row at a time
    console.log(line);
  });

  rl.on('close', () => {
    console.log('Finished');
  });
`;
export const nodeStreamingCode2 = `
	const fs = require('fs');
	const csv = require('csv-parser');

	fs.createReadStream('large.csv')
	  .pipe(csv())
	  .on('data', (row) => {
		console.log(row);
	  })
	  .on('end', () => {
		console.log('Done');
	  });
`;
export const nodeStreamingCode3 = `
  const batch = [];
  const BATCH_SIZE = 1000;

  .on('data', async (row) => {
      batch.push(row);

      if (batch.length >= BATCH_SIZE) {
          stream.pause();

          await insertMany(batch);

          batch.length = 0;
          stream.resume();
      }
  })
`;
export const nodeStreamingCode4 = `
  const { pipeline } = require('stream/promises');

  await pipeline(
    fs.createReadStream('large.csv'),
    csv(),
    async function* (source) {
      for await (const row of source) {
        yield processRow(row);
      }
    }
  );
`;
export const nodeStreamingCode5 = `
  stream.on('data', async (row) => {
    stream.pause();

    await saveToDB(row);

    stream.resume();
  });
`;
export const nodeStreamingCode6 = `
  CREATE TABLE import_checkpoint (
    id INT PRIMARY KEY,
    last_row BIGINT
  );
`;
export const closureCode = `
      function createCounter() {
        let count = 0; // Private variable
        return {
          increment: function() {
            count++;
            return count;
          },
          decrement: function() {
            count--;
            return count;
          },
          getCount: function() {
            return count;
          }
        };
      }

      const counter = createCounter();
      console.log(counter.increment()); // Output: 1
      console.log(counter.increment()); // Output: 2
      console.log(counter.getCount());  // Output: 2
      console.log(counter.count);       // Output: undefined

      function memoizedAdd(multiplier) {
        let cache = {};
        return function(n) {
          if (cache[n]) {
            console.log("Fetching from cache");
            return cache[n];
          }
          console.log("Calculating result");
          cache[n] = n * multiplier;
          return cache[n];
        };
      }

      const add = memoizedAdd(2);
      console.log(add(10));
      console.log(add(10));
      console.log(add(12));

      const sum = function(a) {
        return function(b) {
          if(b) {
            return sum(a + b);
          }
          return a;
        }
      }
      console.log(sum(10)(5)(6)());
    `;

export const systemDesign = `<style>
  .sd-outer {
    width: 100%;
    border: 1.5px dashed #b4b2a9;
    border-radius: 20px;
    padding: 0 14px 15px;
    background: #fff;
    line-height: 1.5;
  }
  .sd-title {
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    color: #1a1a18;
    margin: 0;
    padding: 0;
  }
  .sd-sub {
    text-align: center;
    font-size: 1.6rem;
    color: #5f5e5a;
    margin-bottom: 2px;
  }
  .sd-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .sd-card {
    border-radius: 12px;
    padding: 8px 9px;
    transition: opacity .15s, transform .15s;
    text-decoration: none;
  }
  .sd-card:hover { opacity: .88; transform: translateY(-1px); }
  .sd-card-title { font-size: 1.8rem; font-weight: 500; margin-bottom: 2px; }
  .sd-card-sub   { font-size: 1.5rem; }
  .sd-card ul    { list-style: none; display: flex; flex-direction: column; gap: 4px; margin: 0 }
  .sd-card ul li { font-size: 1.4rempx; display: flex; align-items: flex-start; gap: 6px; }
  .sd-card ul li::before { content: "–"; flex-shrink: 0; }

  .c-purple { background: #EEEDFE; border: 0.5px solid #534AB7; }
  .c-purple .sd-card-title { color: #3C3489; }
  .c-purple .sd-card-sub, .c-purple ul li { color: #534AB7; }

  .c-teal { background: #E1F5EE; border: 0.5px solid #0F6E56; }
  .c-teal .sd-card-title { color: #085041; }
  .c-teal .sd-card-sub, .c-teal ul li { color: #0F6E56; }

  .c-coral { background: #FAECE7; border: 0.5px solid #993C1D; }
  .c-coral .sd-card-title { color: #712B13; }
  .c-coral .sd-card-sub, .c-coral ul li { color: #993C1D; }

  .c-gray { background: #F1EFE8; border: 0.5px solid #5F5E5A; }
  .c-gray .sd-card-title { color: #444441; }
  .c-gray .sd-card-sub, .c-gray ul li { color: #5F5E5A; }

  @media (prefers-color-scheme: dark) {
    body { background: #1a1a18; color: #e8e6de; }
    .sd-outer { background: #242422; border-color: #444441; }
    .sd-title { color: #e8e6de; }
    .sd-sub { color: #888780; }

    .c-purple { background: #3C3489; border-color: #AFA9EC; }
    .c-purple .sd-card-title { color: #CECBF6; }
    .c-purple .sd-card-sub, .c-purple ul li { color: #AFA9EC; }

    .c-teal { background: #085041; border-color: #5DCAA5; }
    .c-teal .sd-card-title { color: #9FE1CB; }
    .c-teal .sd-card-sub, .c-teal ul li { color: #5DCAA5; }

    .c-coral { background: #712B13; border-color: #F0997B; }
    .c-coral .sd-card-title { color: #F5C4B3; }
    .c-coral .sd-card-sub, .c-coral ul li { color: #F0997B; }

    .c-gray { background: #444441; border-color: #B4B2A9; }
    .c-gray .sd-card-title { color: #D3D1C7; }
    .c-gray .sd-card-sub, .c-gray ul li { color: #B4B2A9; }
  }

  @media (max-width: 500px) {
    .sd-grid { grid-template-columns: 1fr; }
  }
</style>
<div class="sd-outer">
  <p class="sd-title">System design</p>
  <p class="sd-sub">The discipline of building reliable, scalable, maintainable software systems</p>
  <div class="sd-grid">
    <div class="sd-card c-purple">
      <p class="sd-card-title">Distributed systems</p>
      <p class="sd-card-sub">Multiple machines, one logical system</p>
      <ul>
        <li>Consistency models</li>
        <li>Consensus (Raft, Paxos)</li>
        <li>Replication &amp; partitioning</li>
        <li>Fault tolerance &amp; CAP theorem</li>
        <li>Distributed messaging &amp; queues</li>
      </ul>
    </div>
    <div class="sd-card c-teal">
      <p class="sd-card-title">Database design</p>
      <p class="sd-card-sub">Storage, retrieval, querying</p>
      <ul>
        <li>Relational vs NoSQL</li>
        <li>Indexing &amp; query optimization</li>
        <li>Sharding &amp; replication</li>
        <li>ACID vs BASE transactions</li>
        <li>Schema design &amp; normalization</li>
      </ul>
    </div>
    <div class="sd-card c-coral">
      <p class="sd-card-title">Application architecture</p>
      <p class="sd-card-sub">Structure of your codebase &amp; services</p>
      <ul>
        <li>Monolith vs microservices</li>
        <li>API design (REST, gRPC, GraphQL)</li>
        <li>Event-driven architecture</li>
        <li>Caching strategies</li>
        <li>Authentication &amp; authorization</li>
      </ul>
    </div>
    <div class="sd-card c-gray">
      <p class="sd-card-title">Infrastructure &amp; reliability</p>
      <p class="sd-card-sub">How systems run and stay up</p>
      <ul>
        <li>Load balancing</li>
        <li>CDNs &amp; edge networks</li>
        <li>Observability &amp; tracing</li>
        <li>CI/CD &amp; deployment</li>
        <li>Capacity planning</li>
      </ul>
    </div>
  </div>
</div>`;
export const javascriptSorting_1 = `<span class="keyword">const</span> numbers = [40, 100, 1, 5, 25];
numbers.sort((a, b) => a - b);

console.log(numbers);
<span class="comment">// Output: [1, 5, 25, 40, 100]</span>
`;
export const javascriptSorting_2 = `<span class="keyword">const</span> numbers = [40, 100, 1, 5, 25];
numbers.sort((a, b) => b - a);

console.log(numbers);
<span class="comment">// Output: [100, 40, 25, 5, 1]</span>
`;

export const javascriptSorting_3 = `<span class="keyword">const</span> fruits = ['banana', 'Apple', 'cherry'];
fruits.sort((a, b) => a.localeCompare(b))

console.log(fruits);
<span class="comment">// Output: ['Apple', 'banana', 'cherry']</span>
`;

export const javascriptSorting_4 = `<span class="keyword">const</span> fruits = ['banana', 'Apple', 'cherry'];
fruits.sort((a, b) => b.localeCompare(a)))

console.log(fruits);
<span class="comment">// Output: ['cherry', 'banana', 'Apple']</span>
`;

export const javascriptSorting_5 = `const items = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 800 }
];

// Ascending by price
items.sort((a, b) => a.price - b.price);

// Ascending alphabetically by name
items.sort((a, b) => a.name.localeCompare(b.name));
`;
export const javascriptSorting_6 = `// Descending by price
items.sort((a, b) => b.price - a.price);

// Descending alphabetically by name
items.sort((a, b) => b.name.localeCompare(a.name));
`;