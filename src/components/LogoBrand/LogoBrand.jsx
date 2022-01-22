import React from 'react';
import { Container } from 'globalStyles';
import { Brand, ListLogo, ListLogoItem, Image } from './LogoBrand.styles';

const LogoBrand = () => {
  return (
    <Brand>
      <Container>
        <ListLogo>
          <ListLogoItem>
            <Image src="https://d33wubrfki0l68.cloudfront.net/7e9910c3fcc2e3e0c129224995410b1389840102/89cba/images/logos/otter.png" />
          </ListLogoItem>
          <ListLogoItem>
            <Image src="https://d33wubrfki0l68.cloudfront.net/0a6b8b7fdb729998a5e98b5ca4260071923135e1/c249b/images/logos/thegradient.png" />
          </ListLogoItem>
          <ListLogoItem>
            <Image src="https://d33wubrfki0l68.cloudfront.net/b9074a27af6c92f0595df6bc22112d3367937493/56aaa/images/logos/stickylab.png" />
          </ListLogoItem>
          <ListLogoItem>
            <Image src="https://d33wubrfki0l68.cloudfront.net/b907b6bd0d1a29194f42364309dc1658926ab2bf/b5271/images/logos/americanpurpose.png" />
          </ListLogoItem>
          <ListLogoItem>
            <Image src="https://d33wubrfki0l68.cloudfront.net/3f720bc6ec19e66752ca32799d5704102909cd63/d7c88/images/logos/ecosia.png" />
          </ListLogoItem>
          <ListLogoItem>
            <Image src="https://d33wubrfki0l68.cloudfront.net/cff1f2c171aefe0a9b261754eea8570c2f484e2f/6e5d4/images/logos/guideline.png" />
          </ListLogoItem>
          <ListLogoItem>
            <Image src="https://d33wubrfki0l68.cloudfront.net/578009d1044793c3c661c46b36eb77ef03a9993c/4813d/images/logos/hir.png" />
          </ListLogoItem>
          <ListLogoItem>
            <Image src="https://d33wubrfki0l68.cloudfront.net/c7df26db411b44f298bb53b73d69441df2e3e616/67a64/images/logos/ollie.png" />
          </ListLogoItem>
        </ListLogo>
      </Container>
    </Brand>
  );
};

export default LogoBrand;
