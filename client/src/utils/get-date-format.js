/*!
 * Copyright (c) 2024 PLANKA Software GmbH
 * Licensed under the Fair Use License: https://github.com/plankanban/planka/blob/master/LICENSE.md
 */

export default (date, longDateFormat = 'longDateTime', fullDateFormat = 'fullDateTime') => {
  const year = date.getFullYear();
  const currentYear = new Date().getFullYear();

  return year === currentYear ? longDateFormat : fullDateFormat;
};
