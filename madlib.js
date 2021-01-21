    function madlib(domTarget, replacementText) {
      const target = document.getElementById(domTarget);

      if (replacementText == null) target.innerHTML = ``;
      else if (domTarget == "madlib-edu")
        target.innerHTML =
          `More specifically, most ${title} have ` + replacementText + `.`;
      else if (domTarget == "madlib-trainplant")
        target.innerHTML =
          `This career needs ` +
          replacementText +
          ` on-site/in-plant training.`;
      else if (domTarget == "madlib-trainjob")
        target.innerHTML =
          `${maxTitle} require ` + replacementText + ` on-the-job training.`;
      else if (domTarget == "madlib-exp")
        target.innerHTML =
          `Generally, ${maxTitle} have ` +
          replacementText +
          ` work-related experience.`;
      else if (domTarget == "madlib-edumajor")
        target.innerHTML = `The most common majors are:` + replacementText;
      else target.innerHTML = ``;
    }
