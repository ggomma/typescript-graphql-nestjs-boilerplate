const pluralize = require('pluralize');

module.exports = function (plop) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // create your generators here
  plop.setGenerator('module', {
    description: 'application controller logic',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'module name please'
    }],
    actions: function(data) {
      let actions = [];
      
      actions.push(
        {
          type: 'add',
          path: 'src/modules/' + pluralize(data.name) + '/index.ts',
          templateFile: 'plop-templates/template/index.txt',
          data : {
            name : data.name,
            pluralName : pluralize(data.name),
            pluralCapName : capitalizeFirstLetter(pluralize(data.name))
          },
        },
        {
          type: 'add',
          path: 'src/modules/' + pluralize(data.name) + '/' + pluralize(data.name) +'.graphql',
          templateFile: 'plop-templates/template/templates.txt',
          data : {
            name : data.name,
            capName : capitalizeFirstLetter(data.name),
            pluralName : pluralize(data.name),
            pluralCapName : capitalizeFirstLetter(pluralize(data.name))
          },
        },
        {
          type: 'add',
          path: 'src/modules/' + pluralize(data.name) + '/' + pluralize(data.name) +'.module.ts',
          templateFile: 'plop-templates/template/templates.module.txt',
          data : {
            name : data.name,
            capName : capitalizeFirstLetter(data.name),
            pluralName : pluralize(data.name),
            pluralCapName : capitalizeFirstLetter(pluralize(data.name))
          },
        },
        {
          type: 'add',
          path: 'src/modules/' + pluralize(data.name) + '/' + pluralize(data.name) +'.service.ts',
          templateFile: 'plop-templates/template/templates.service.txt',
          data : {
            name : data.name,
            capName : capitalizeFirstLetter(data.name),
            pluralName : pluralize(data.name),
            pluralCapName : capitalizeFirstLetter(pluralize(data.name))
          },
        },
        {
          type: 'add',
          path: 'src/modules/' + pluralize(data.name) + '/' + pluralize(data.name) +'.resolver.ts',
          templateFile: 'plop-templates/template/templates.resolver.txt',
          data : {
            name : data.name,
            capName : capitalizeFirstLetter(data.name),
            pluralName : pluralize(data.name),
            pluralCapName : capitalizeFirstLetter(pluralize(data.name))
          },
        },
        {
          type: 'add',
          path: 'src/modules/' + pluralize(data.name) + '/repositories/' + data.name +'.repository.ts',
          templateFile: 'plop-templates/template/repositories/template.repository.txt',
          data : {
            name : data.name,
            capName : capitalizeFirstLetter(data.name),
            pluralName : pluralize(data.name),
            pluralCapName : capitalizeFirstLetter(pluralize(data.name))
          },
        },
        {
          type: 'add',
          path: 'src/modules/' + pluralize(data.name) + '/entities/' + pluralize(data.name) +'.entity.ts',
          templateFile: 'plop-templates/template/entities/templates.entity.txt',
          data : {
            name : data.name,
            capName : capitalizeFirstLetter(data.name),
            pluralName : pluralize(data.name),
            pluralCapName : capitalizeFirstLetter(pluralize(data.name))
          },
        },
        {
          type: 'add',
          path: 'src/modules/' + pluralize(data.name) + '/dto/create-' + data.name +'.dto.ts',
          templateFile: 'plop-templates/template/dto/create-template.dto.txt',
          data : {
            name : data.name,
            capName : capitalizeFirstLetter(data.name),
            pluralName : pluralize(data.name),
            pluralCapName : capitalizeFirstLetter(pluralize(data.name))
          },
        },
        {
          type: 'add',
          path: 'src/modules/' + pluralize(data.name) + '/dto/find-' + data.name +'.dto.ts',
          templateFile: 'plop-templates/template/dto/find-template.dto.txt',
          data : {
            name : data.name,
            capName : capitalizeFirstLetter(data.name),
            pluralName : pluralize(data.name),
            pluralCapName : capitalizeFirstLetter(pluralize(data.name))
          },
        },
        {
          type: 'add',
          path: 'src/modules/' + pluralize(data.name) + '/dto/find-' + pluralize(data.name) +'.dto.ts',
          templateFile: 'plop-templates/template/dto/find-templates.dto.txt',
          data : {
            name : data.name,
            capName : capitalizeFirstLetter(data.name),
            pluralName : pluralize(data.name),
            pluralCapName : capitalizeFirstLetter(pluralize(data.name))
          },
        },
      );
      
      return actions
    
    }
  });
};
