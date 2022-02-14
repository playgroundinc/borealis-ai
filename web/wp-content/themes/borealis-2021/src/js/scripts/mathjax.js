MathJax = {
  loader: {load: ['[tex]/textmacros', '[tex]/bbox']},
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      processEscapes: true,
      packages: {
        '[+]': ['textmacros']
      },
      textmacros: {
        packages: {'[+]': ['bbox']}
      }
    }
  };

  