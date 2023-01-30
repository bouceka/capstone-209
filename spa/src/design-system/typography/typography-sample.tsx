export interface TypographySampleProps {
  typeface: string;
  weight: string;
  size: string;
  height: string;
  className: string;
  content: string;
}

export const TypoExampleSample = `// Display Large
<h1 className='display--large--bold'>Display Large Bold</h1>
<h1 className='display--large'>Display Large Semibold</h1>
<h1 className='display--large--medium'>Display Large Medium</h1>
// Display Small
<div className='display--small--medium'>Display Text Medium</div>
<div className='display--small'>Display Text Small Semibold</div>
<div className='display--small--bold'>Display Text Bold</div>
// Heading 1
<h1 className='heading--medium'>Heading 1 Medium</h1>
<h1 className='heading'>Heading 1</h1>
<h1 className='heading--bold'>Heading 1 Bold</h1>
// Heading 2
<h2 className='heading--medium'>Heading 2 Medium</h2>
<h2 className='heading'>Heading 2</h2>
<h2 className='heading--bold'>Heading 2 Bold</h2>
// Heading 3
<h3 className='heading--medium'>Heading 3 Medium</h3>
<h3 className='heading'>Heading 3</h3>
<h3 className='heading--bold'>Heading 3 Bold</h3>
// Heading 4
<h4 className='heading--medium'>Heading 4 Medium</h4>
<h4 className='heading'>Heading 4</h4>
<h4 className='heading--bold'>Heading 4 Bold</h4>
// Heading 5
<h5 className='heading--bold'>Heading 5 Bold</h5>
<h5 className='heading'>Heading 5</h5>
<h5 className='heading--medium'>Heading 5 Medium</h5>
// Heading 6
<h6 className='heading--medium'>Heading 6 Medium</h6>
<h6 className='heading'>Heading 6</h6>
<h6 className='heading--bold'>Heading 6 Bold</h6>
// Body Large
<p className='paragraph--large'>Body Text Large</p>
<p className='paragraph--large--bold'>Body Text Large Bold</p>
// Body Medium
<p className='paragraph--medium'>Body Text Medium</p>
<p className='paragraph--medium--bold'>Body Text Medium Bold</p>
// Body Small
<p className='paragraph--small'>Body Text Small</p>
<p className='paragraph--small--bold'>Body Text Small Bold</p>
// Caption Large
<p className='caption--large'>Caption Text Large</p>
<p className='caption--large--bold'>Caption Text Large Bold</p>
// Caption Medium
<p className='caption--medium'>Caption Text Medium</p>
<p className='caption--medium--bold'>Caption Text Medium Bold</p>`;

export const TypoCSSSample = `// Display Large
.display--large--medium {
    font-weight: 400;
    font-size: 5.2rem;
    line-height: 5.6rem;
}
.display--large {
    font-weight: 600;
    font-size: 5.2rem;
    line-height: 5.6rem;
}
.display--large--bold {
    font-weight: 700;
    font-size: 5.2rem;
    line-height: 5.6rem;
}
// Display Small
.display--small--medium {
    font-weight: 400;
    font-size: 4.4rem;
    line-height: 4.8rem;
}
.display--small {
    font-weight: 600;
    font-size: 4.4rem;
    line-height: 4.8rem;
}
.display--small--bold {
    font-weight: 700;
    font-size: 4.4rem;
    line-height: 4.8rem;
}
// Heading 1
h1.heading--medium {
    font-weight: 400;
    font-size: 4rem;
    line-height: 4.8rem;
}
h1.heading {
    font-weight: 600;
    font-size: 4rem;
    line-height: 4.8rem;
}
h1.heading--bold {
    font-weight: 700;
    font-size: 4rem;
    line-height: 4.8rem;
}
// Heading 2
h2.heading {
    font-weight: 600;
    font-size: 3.6rem;
    line-height: 4.4rem;
}
h2.heading--medium {
    font-weight: 400;
    font-size: 3.6rem;
    line-height: 4.4rem;
}
h2.heading--bold {
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 4.4rem;
}
// Heading 3
h3.heading {
    font-weight: 600;
    font-size: 3.2rem;
    line-height: 3.6rem;
}
h3.heading--medium {
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 3.6rem;
}
h3.heading--bold {
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 3.6rem;
}
// Heading 4
h4.heading--medium {
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 3.6rem;
}
h4.heading {
    font-weight: 600;
    font-size: 2.8rem;
    line-height: 3.6rem;
}
h4.heading--bold {
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 3.6rem;
}
// Heading 5
h5.heading--medium {
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 3.2rem;
}
h5.heading {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3.2rem;
}
h5.heading--bold {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
}
// Heading 6
h6.heading--medium {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.8rem;
}
h6.heading {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.8rem;
}
h6.heading--bold {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.8rem;
}
// Body 1
.paragraph--large {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.8rem;
}
.paragraph--large--bold{
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.8rem;
}
// Body 2
.paragraph--medium {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
}
.paragraph--medium--bold {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.4rem;
}
// Body 3
.paragraph--small {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
}
.paragraph--small--bold {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2rem;
}
// Cation 1
.caption--large {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6rem;
}
.caption--large--bold {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.6rem;
}
// Cation 2
.caption--medium{
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4rem;
}
.caption--medium--bold {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.4rem;
}`;

export const TypoTableData: TypographySampleProps[] = [
  {
    height: '56',
    size: '52',
    className: 'display--large--medium',
    weight: '400',
    typeface: 'Switzer',
    content: `<h1 class='display--large--medium'>Display 1</h1>`,
  },
  {
    height: '56',
    size: '52',
    className: 'display--large',
    weight: '600',
    typeface: 'Switzer',
    content: `<h1 class='display--large'>Display 1</h1>`,
  },
  {
    height: '56',
    size: '52',
    className: 'display--large--bold',
    weight: '700',
    typeface: 'Switzer',
    content: `<h1 class='display--large--bold'>Display 1</h1>`,
  },

  {
    height: '48',
    size: '44',
    className: 'display--small--medium',
    weight: '400',
    typeface: 'Switzer',
    content: `<h1 class='display--small--medium'>Display 2</h1>`,
  },
  {
    height: '48',
    size: '44',
    className: 'display--small',
    weight: '600',
    typeface: 'Switzer',
    content: `<h1 class='display--small'>Display 2</h1>`,
  },
  {
    height: '48',
    size: '44',
    className: 'display--small--bold',
    weight: '700',
    typeface: 'Switzer',
    content: `<h1 class='display--small--bold'>Display 2</h1>`,
  },

  {
    height: '48',
    size: '40',
    className: 'heading--medium',
    weight: '400',
    typeface: 'Switzer',
    content: `<h1 class='heading--medium'>Heading 1</h1>`,
  },
  {
    height: '48',
    size: '40',
    className: 'heading',
    weight: '600',
    typeface: 'Switzer',
    content: `<h1 class='heading'>Heading 1</h1>`,
  },
  {
    height: '48',
    size: '40',
    className: 'heading--bold',
    weight: '700',
    typeface: 'Switzer',
    content: `<h1 class='heading--bold'>Heading 1</h1>`,
  },

  {
    height: '44',
    size: '36',
    className: 'heading--medium',
    weight: '400',
    typeface: 'Switzer',
    content: `<h2 class='heading--medium'>Heading 2</h2>`,
  },
  {
    height: '44',
    size: '36',
    className: 'heading',
    weight: '600',
    typeface: 'Switzer',
    content: `<h2 class='heading'>Heading 2</h2>`,
  },
  {
    height: '44',
    size: '36',
    className: 'heading--bold',
    weight: '700',
    typeface: 'Switzer',
    content: `<h2 class='heading--bold'>Heading 2</h2>`,
  },

  {
    height: '36',
    size: '32',
    className: 'heading--medium',
    weight: '400',
    typeface: 'Switzer',
    content: `<h3 class='heading--medium'>Heading 3</h3>`,
  },
  {
    height: '36',
    size: '32',
    className: 'heading',
    weight: '600',
    typeface: 'Switzer',
    content: `<h3 class='heading'>Heading 3</h3>`,
  },
  {
    height: '36',
    size: '32',
    className: 'heading--bold',
    weight: '700',
    typeface: 'Switzer',
    content: `<h3 class='heading--bold'>Heading 3</h3>`,
  },

  {
    height: '36',
    size: '28',
    className: 'heading--medium',
    weight: '400',
    typeface: 'Switzer',
    content: `<h4 class='heading--medium'>Heading 4</h4>`,
  },
  {
    height: '36',
    size: '28',
    className: 'heading',
    weight: '600',
    typeface: 'Switzer',
    content: `<h4 class='heading'>Heading 4</h4>`,
  },
  {
    height: '36',
    size: '28',
    className: 'heading--bold',
    weight: '700',
    typeface: 'Switzer',
    content: `<h4 class='heading--bold'>Heading 4</h4>`,
  },

  {
    height: '32',
    size: '24',
    className: 'heading--medium',
    weight: '400',
    typeface: 'Switzer',
    content: `<h5 class='heading--medium'>Heading 5</h5>`,
  },
  {
    height: '32',
    size: '24',
    className: 'heading',
    weight: '600',
    typeface: 'Switzer',
    content: `<h5 class='heading'>Heading 5</h5>`,
  },
  {
    height: '32',
    size: '24',
    className: 'heading--bold',
    weight: '700',
    typeface: 'Switzer',
    content: `<h5 class='heading--bold'>Heading 5</h5>`,
  },
  {
    height: '28',
    size: '20',
    className: 'heading--medium',
    weight: '400',
    typeface: 'Switzer',
    content: `<h6 class='heading--medium'>Heading 6</h6>`,
  },
  {
    height: '28',
    size: '20',
    className: 'heading',
    weight: '600',
    typeface: 'Switzer',
    content: `<h6 class='heading'>Heading 6</h6>`,
  },
  {
    height: '28',
    size: '20',
    className: 'heading--bold',
    weight: '700',
    typeface: 'Switzer',
    content: `<h6 class='heading--bold'>Heading 6</h6>`,
  },

  {
    height: '28',
    size: '18',
    className: 'paragraph--large--bold',
    weight: '400',
    typeface: 'Switzer',
    content: `<p class='paragraph--large--bold'>Body 1</p>`,
  },
  {
    height: '28',
    size: '18',
    className: 'paragraph--large',
    weight: '600',
    typeface: 'Switzer',
    content: `<p class='paragraph--large'>Body 1</p>`,
  },

  {
    height: '24',
    size: '16',
    className: 'paragraph--medium',
    weight: '400',
    typeface: 'Switzer',
    content: `<p class='paragraph--medium'>Body 2</p>`,
  },
  {
    height: '24',
    size: '16',
    className: 'paragraph--medium--bold',
    weight: '600',
    typeface: 'Switzer',
    content: `<p class='paragraph--medium--bold'>Body 2</p>`,
  },

  {
    height: '20',
    size: '14',
    className: 'paragraph--small',
    weight: '400',
    typeface: 'Switzer',
    content: `<p class='paragraph--small'>Body 3</p>`,
  },
  {
    height: '20',
    size: '14',
    className: 'paragraph--small--bold',
    weight: '600',
    typeface: 'Switzer',
    content: `<p class='paragraph--small--bold'>Body 3</p>`,
  },

  {
    height: '16',
    size: '12',
    className: 'caption--large',
    weight: '400',
    typeface: 'Switzer',
    content: `<p class='caption--large'>Caption 1</p>`,
  },
  {
    height: '16',
    size: '12',
    className: 'caption--large--bold',
    weight: '600',
    typeface: 'Switzer',
    content: `<p class='caption--large--bold'>Caption 1</p>`,
  },

  {
    height: '14',
    size: '10',
    className: 'caption--medium',
    weight: '400',
    typeface: 'Switzer',
    content: `<p class='caption--medium'>Caption 2</p>`,
  },
  {
    height: '14',
    size: '10',
    className: 'caption--medium--bold',
    weight: '600',
    typeface: 'Switzer',
    content: `<p class='caption--medium--bold'>Caption 2</p>`,
  },
];
