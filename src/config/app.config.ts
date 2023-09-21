interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Marketing Manager'],
  tenantName: 'Client',
  applicationName: 'Digitron Savvy',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage interaction', 'Manage feedback', 'Manage user', 'Manage client'],
  getQuoteUrl: 'https://app.roq.ai/proposal/19e001ef-2ae9-46ea-af6c-ae9eec300406',
};
