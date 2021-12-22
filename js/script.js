let con = document.getElementById("cont"),
  one = document.getElementById("one"),
  two = document.getElementById("two"),
  three = document.getElementById("three");

one.addEventListener("click", () => {
  one.classList.add("actv");
  two.classList.remove("actv");
  three.classList.remove("actv");
  return (con.innerHTML = `
        <h2>Service Tab One</h2>
        <p class="py-4">Etiam egestas metus vitae est interdum, in eleifend nunc volutpat.
         Aliquam molestie ipsum quis suscipit lacinia. Mauris turpis libero, iaculis non dictum ac, 
         ornare a massa. Duis id lorem purus. Fusce viverra ullamcorper metus. Curabitur
         puvinar suscipit sapien ac blandit. Aliquam vel pulvinar purus, sit amet luctus urna.</p>
        <p>Nam consequat, leo vitae aliquet dignissim, leo est laoreet nibh, nec dictum libero justo
         vitae dolor. Donec tristique eros at nisi elementum efficitur. Proin 
        ornare feugiat ex placerat pellenteqsue. Nulla convallis est volutpat ex ultrices facilisis.</p>
        `);
});
two.addEventListener("click", () => {
  one.classList.remove("actv");
  two.classList.add("actv");
  three.classList.remove("actv");
  return (con.innerHTML = `
          <h2>Service Tab Two</h2>
          <p class="py-4">Nam consequat, leo vitae aliquet dignissim, 
          leo est laoreet nibh, nec dictum libero justo vitae dolor. Donec 
          tristique eros at nisi elementum efficitur. Proin ornare feugiat 
          ex placerat pellenteqsue. Nulla convallis est volutpat ex ultrices facilisis.</p>
          <p>Etiam egestas metus vitae est interdum, 
          in eleifend nunc volutpat. Aliquam molestie ipsum quis suscipit lacinia. 
          Mauris turpis libero, iaculis non dictum ac, ornare a massa. Duis id lorem purus. 
          Fusce viverra ullamcorper metus. Curabitur puvinar suscipit sapien ac blandit.
           Aliquam vel pulvinar purus, sit amet luctus urna.
          </p>
          `);
});
three.addEventListener("click", () => {
  one.classList.remove("actv");
  two.classList.remove("actv");
  three.classList.add("actv");
  return (con.innerHTML = `
            <h2>Service Tab Three</h2>
            <p class="py-4">Mauris turpis libero,
             iaculis non dictum ac, ornare a massa.
              Duis id lorem purus. Fusce viverra ullamcorper metus. 
              Curabitur puvinar suscipit sapien ac blandit. Aliquam 
              vel pulvinar purus, sit amet luctus urna. Nulla convallis est volutpat ex ultrices '
            facilisis.
            </p>
            <p>Etiam egestas metus vitae est interdum, 
            in eleifend nunc volutpat. Aliquam molestie ipsum 
            quis suscipit lacinia. Nam consequat, leo vitae aliquet 
            dignissim, leo est laoreet nibh, nec dictum libero justo vitae dolor. Donec tristique eros at
             nisi elementum efficitur. Proin ornare feugiat ex placerat pellenteqsue. </p>
            `);
});
