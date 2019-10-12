const componentExists = require('./src/utils/componentExists')
module.exports = plop => {
  plop.setGenerator('View', {
    description: 'Create a new View',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'With redux?',
        default: 'Yes',
        choices: () => ['Yes', 'No']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Button',
        validate: value => {
          if (/.+/.test(value)) {
            return componentExists(value)
              ? 'A component or container with this name already exists'
              : true
          }
          return 'The name is required'
        }
      }
    ],
    actions: data => {
      let path = 'src/views/{{pascalCase name}}/index.js'
      let pathView = 'src/views/{{pascalCase name}}/ViewComponent.js'
      let componentTemplateView = './__templates__/common/ViewComponent.js.hbs'      
      let pathStyles = 'src/views/{{pascalCase name}}/styles.js'
      let componentTemplate =
        data.type == 'Yes'
          ? './__templates__/class/classComponentRedux.js.hbs'
          : './__templates__/class/classComponent.js.hbs'
      let componentTemplateStyles = './__templates__/common/styles.js.hbs'
      let pathIndex = 'src/views/index.js'
      let patternImport = /\/\/ Import views here\n/g
      let patternInsert = /\/\/ Insert views here\n/g
      let componentTemplateImport = './__templates__/common/importView.hbs'
      let componentTemplateInsert = './__templates__/common/insertView.hbs'

      const actions = [
        {
          type: 'add',
          path: path,
          templateFile: componentTemplate
        },
        {
          type: 'add',
          path: pathView,
          templateFile: componentTemplateView
        },
        {
          type: 'add',
          path: pathStyles,
          templateFile: componentTemplateStyles
        },
        {
          type: 'modify',
          path: pathIndex,
          pattern: patternImport,
          templateFile: componentTemplateImport
        },
        {
          type: 'modify',
          path: pathIndex,
          pattern: patternInsert,
          templateFile: componentTemplateInsert
        },
        {
          type: 'modify',
          path: 'src/routes/Routes.js',
          pattern: patternInsert,
          templateFile: './__templates__/common/insertViewRoutes.hbs'
        }
      ]

      return actions
    }
  })
  plop.setGenerator('Component', {
    description: 'Create a new Component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Select the type of component',
        default: 'Class Component',
        choices: () => ['Class Component', 'Stateless Component']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Button',
        validate: value => {
          if (/.+/.test(value)) {
            return componentExists(value)
              ? 'A component or container with this name already exists'
              : true
          }
          return 'The name is required'
        }
      }
    ],
    actions: data => {
      let typeAction = data.type;
      let componentTemplate =
        typeAction == 'Class Component'
          ? './__templates__/stateless/classComponent.js.hbs'
          : './__templates__/stateless/statelessComponent.js.hbs'
      let path = 'src/components/{{pascalCase name}}/index.js'
      let pathStyles = 'src/components/{{pascalCase name}}/styles.js'
      let componentTemplateStyles = './__templates__/common/styles.js.hbs'
      let pathIndex = 'src/components/index.js'
      let patternImport = /\/\/ Import component here\n/g
      let patternInsert = /\/\/ Insert component here\n/g
      let componentTemplateImport = './__templates__/common/importComponent.hbs'
      let componentTemplateInsert = './__templates__/common/insertComponent.hbs'
      let pathView = 'src/components/{{pascalCase name}}/ViewComponent.js'
      let componentTemplateView = './__templates__/common/ViewComponent.js.hbs'  
      let updateActions = [{
        type: 'add',
        path: pathView,
        templateFile: componentTemplateView
      }]
      const actions = [        
        {
          type: 'add',
          path: path,
          templateFile: componentTemplate
        },        
        {
          type: 'add',
          path: pathStyles,
          templateFile: componentTemplateStyles
        },
        {
          type: 'modify',
          path: pathIndex,
          pattern: patternImport,
          templateFile: componentTemplateImport
        },
        {
          type: 'modify',
          path: pathIndex,
          pattern: patternInsert,
          templateFile: componentTemplateInsert
        }
      ]

      const newActions = [
        ...actions,
        ...updateActions
      ]

      return typeAction != 'Class Component' ? actions : newActions;     
    }
  })
  plop.setGenerator('Redux', {
    description: 'Create a new Redux',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Button',
        validate: value => {
          if (/.+/.test(value)) {
            return componentExists(value)
              ? 'A component or container with this name already exists'
              : true
          }
          return 'The name is required'
        }
      }
    ],
    actions: () => {
      const actions = [
        {
          type: 'add',
          path: 'src/redux/reducers/{{pascalCase name}}.js',
          templateFile: './__templates__/redux/reduce.js.hbs'
        },
        {
          type: 'modify',
          path: 'src/redux/reducers/index.js',
          pattern: /\/\/ Import redux here\n/g,
          templateFile: './__templates__/redux/importRedux.hbs'
        },
        {
          type: 'modify',
          path: 'src/redux/reducers/index.js',
          pattern: /\/\/ Insert redux here\n/g,
          templateFile: './__templates__/redux/insertRedux.hbs'
        }
      ]

      return actions
    }
  })
}
