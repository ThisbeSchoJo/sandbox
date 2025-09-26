# Learning Sandbox 🚀

A flexible TypeScript/Node.js sandbox project for learning and experimenting with new technologies.

## 🎯 Purpose

This project is designed to be your personal learning playground where you can:
- Experiment with new programming concepts
- Try out different frameworks and libraries
- Practice coding challenges
- Build small projects and prototypes
- Learn new technologies in a safe environment

## 🛠️ Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js (for API experiments)
- **Testing**: Vitest
- **Linting**: ESLint + Prettier
- **Build Tool**: tsx (for development)

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp env.example .env
   # Edit .env with your preferred settings
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Visit your sandbox**:
   Open http://localhost:3000 in your browser

## 📁 Project Structure

```
src/
├── api/           # API routes and controllers
├── examples/      # Code examples and experiments
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── index.ts       # Main application entry point
```

## 🧪 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm start` - Start the production server
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Check code for linting errors
- `npm run lint:fix` - Fix linting errors automatically
- `npm run format` - Format code with Prettier

## 🎓 Learning Ideas

Here are some ideas for what you can experiment with in this sandbox:

### Backend Development
- REST API design and implementation
- GraphQL APIs
- Authentication and authorization
- Database integration (PostgreSQL, MongoDB)
- Caching strategies (Redis)
- WebSocket implementations

### Frontend Integration
- React components
- Vue.js applications
- Static site generation
- Progressive Web Apps

### DevOps & Tools
- Docker containerization
- CI/CD pipelines
- Monitoring and logging
- Performance optimization

### Advanced Concepts
- Microservices architecture
- Event-driven programming
- Machine learning integration
- Real-time applications

## 📝 Getting Started with Experiments

1. Create new files in the `src/examples/` directory
2. Import and use utilities from `src/utils/`
3. Define types in `src/types/` as needed
4. Add API routes in `src/api/` for backend experiments

## 🤝 Contributing

This is your personal sandbox! Feel free to:
- Add new examples and experiments
- Modify the structure to fit your learning needs
- Try out new technologies and frameworks
- Break things and learn from mistakes

Happy coding! 🎉
