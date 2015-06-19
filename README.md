# wrap
Reverse transclusion for angular, wrap and compile an element against the original scope

Draft. Deprecated.

To use- include 'wrap' as a dependency of your application/module, then 'wrap' as a dependency of the relevant directive.

In the directives linking function, to use:

```(javascript)
  link:function(scope, el){
      wrap(scope, el, 'template.html');
  }
```

Where template is the template (from your template cache) you wish to use to wrap the directive element
