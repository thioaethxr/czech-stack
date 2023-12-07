import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import type { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

interface Props {
  name: IconName;
  type?: IconPrefix;
}

library.add(fas);
library.add(far);
library.add(fab);

export const Icon: React.FC<Props> = ({ name, type = 'fas' }) => (
  <span className="czs-icon">
    <FontAwesomeIcon icon={[type, name]} />
  </span>
);
