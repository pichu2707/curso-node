


console.log( process.env );


export const { npm_package_version, USERDOMAIN  } = process.env;
// console.log({ npm_package_version, USERDOMAIN });
// console.table({ npm_package_version, USERDOMAIN });


const characters = ['Flash', 'Batman', 'Superman', 'Wonder']

const [ , batman ] = characters;

console.log('Batman: ', batman);

