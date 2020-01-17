var tableau = document.querySelector('table');

fetch('http://localhost:1337/apprenants')
    .then(resp => resp.json())
    .then(data => {
        data.forEach((d) => {
            // console.log(data);
            console.log(data)

            let insertNom = document.getElementById("lacabanne");
            insertNom.textContent = d.nom;
            // console.log(insertNom);
            
            let insertPrenom = document.getElementById("adeline");
            insertPrenom.textContent = d.prenom;
            // console.log(insertPrenom);

            // console.log(insertPrenom, insertNom);


            //competence metier
            let insertMaquette = document.getElementById("maq");
            insertMaquette.textContent = d.competences_metiers[0].intitule;
            // console.log(insertMaquette);
            
            let insertInterface = document.getElementById("real");
            insertInterface.textContent = d.competences_metiers[1].intitule;
            // console.log(insertInterface);

            let insertDyna = document.getElementById("realdyna");
            insertDyna.textContent = d.competences_metiers[2].intitule;
            // console.log(insertDyna);

            let insertecom = document.getElementById("e-commerce");
            insertecom.textContent = d.competences_metiers[3].intitule;
            // console.log(insertecom);

            let insertebdd = document.getElementById("bdd");
            insertebdd.textContent = d.competences_metiers[4].intitule;
            // console.log(insertebdd);

            let inserteComp = document.getElementById("composant_donnee");
            inserteComp.textContent = d.competences_metiers[5].intitule;
            //  console.log(inserteComp);

             let inserteAppli = document.getElementById("composant_application");
             inserteAppli.textContent = d.competences_metiers[6].intitule;
            //  console.log(inserteAppli);

            let inserteecommerce = document.getElementById("composants_ecommerce");
            inserteecommerce.textContent = d.competences_metiers[6].intitule;
            //  console.log(inserteecommerce);
            

            //competence technique
            let insertehtml = document.getElementById("html");
            insertehtml.textContent = d.competences_techniques[0].intitule;
            // console.log(insertehtml);

            let insertecss = document.getElementById("css");
            insertecss.textContent = d.competences_techniques[1].intitule;
            // console.log(insertecss);

            let insertejavascript_p = document.getElementById("javascript_p");
            insertejavascript_p.textContent = d.competences_techniques[2].intitule;
            // console.log(insertejavascript_p);

            let insertejavascript_a = document.getElementById("javascript_a");
            insertejavascript_a.textContent = d.competences_techniques[3].intitule;
            // console.log(insertejavascript_a);

            let insertewordpress = document.getElementById("wordpress");
            insertewordpress.textContent = d.competences_techniques[4].intitule;
            // console.log(insertewordpress);

            let inserteAngular = document.getElementById("angular");
            inserteAngular.textContent = d.competences_techniques[5].intitule;
            // console.log(inserteAngular);

            let inserteReact = document.getElementById("react");
            inserteReact.textContent = d.competences_techniques[7].intitule;
            // console.log(inserteReact);

            let inserteC = document.getElementById("c");
            inserteC.textContent = d.competences_techniques[6].intitule;
            // console.log(inserteC);

            let inserteJava = document.getElementById("Java");
            inserteJava.textContent = d.competences_techniques[8].intitule;
            // console.log(inserteJava);

            let inserteNode = document.getElementById("Node");
            inserteNode.textContent = d.competences_techniques[9].intitule;
            // console.log(inserteNode);

            let insertephp_p = document.getElementById("php_p");
            insertephp_p.textContent = d.competences_techniques[10].intitule;
            // console.log(insertephp_p);

            let insertephp_o = document.getElementById("php_o");
            insertephp_o.textContent = d.competences_techniques[11].intitule;
            // console.log(insertephp_o);
            
            let insertepython = document.getElementById("python");
            insertepython.textContent = d.competences_techniques[12].intitule;
            // console.log(insertepython);
            
            let insertesql = document.getElementById("sql");
            insertesql.textContent = d.competences_techniques[13].intitule;
            // console.log(insertesql);

            //     let ligne2 = document.createElement('tr');
            //    for(let i = 0; i< d.competences_metiers.length;i++) {

    
            //         let intitule = document.createElement('td');
            //         intitule.textContent = d.competences_metiers[i].intitule;
            //         ligne2.appendChild(intitule);

            //         let categorie = document.createElement('td');
            //         categorie.textContent = d.competences_metiers[i].categorie;
            //         ligne2.appendChild(categorie);

            //         let cell = document.createElement('td');
            //         cell.textContent = d.competences_metiers[0].level_metier.Comprendre;
            //         ligne2.appendChild(cell);

            //         let cell1 = document.createElement('td');
            //         cell1.textContent = d.competences_metiers[0].level_metier.duppliquer;
            //         ligne2.appendChild(cell1);

            //         let cell2 = document.createElement('td');
            //         cell2.textContent = d.competences_metiers[0].level_metier.analyser;
            //         ligne2.appendChild(cell2);

            //         let cell3 = document.createElement('td');
            //         cell3.textContent = d.competences_metiers[0].level_metier.evaluer;
            //         ligne2.appendChild(cell3);

            //         let cell4 = document.createElement('td');
            //         cell4.textContent = d.competences_metiers[0].level_metier.concevoir;
            //         ligne2.appendChild(cell4);

            //         let cell5 = document.createElement('td');
            //         cell5.textContent = d.competences_metiers[0].level_metier.inventer;
            //         ligne2.appendChild(cell5);


                    
            //     }
            

            //     // tableau.appendChild(ligne2)

              
                // let ligne3 = document.createElement('tr');
                // for(let i = 0; i< d.competences_techniques.length;i++) {

                //     // for(let i=0; i<3; i++){
                //     //     let cell1 = document.createElement('td');
                //     //     Object.keys(d.competences_techniques[0].levelcomptech)
                //     //     cell1.textContent = d.competences_techniques[0].levelcomptech.duppliquer;
                //     //     ligne2.appendChild(cell1);
                
                //     // }

    
                //     let intitule = document.createElement('td');
                //     intitule.textContent = d.competences_techniques[i].intitule;
                //     ligne3.appendChild(intitule)

                //     let cell6 = document.createElement('td');
                //     cell6.textContent = d.competences_techniques[0].levelcomptech.Comprendre;
                //     ligne3.appendChild(cell6);

                //     let cell1 = document.createElement('td');
                //     cell1.textContent = d.competences_techniques[0].levelcomptech.duppliquer;
                //     ligne3.appendChild(cell1);

                //     let cell2 = document.createElement('td');
                //     cell2.textContent = d.competences_techniques[0].levelcomptech.analyser;
                //     ligne3.appendChild(cell2);

                //     let cell3 = document.createElement('td');
                //     cell3.textContent = d.competences_techniques[0].levelcomptech.evaluer;
                //     ligne3.appendChild(cell3);

                //     let cell4 = document.createElement('td');
                //     cell4.textContent = d.competences_techniques[0].levelcomptech.concevoir;
                //     ligne3.appendChild(cell4);

                //     let cell5 = document.createElement('td');
                //     cell5.textContent = d.competences_techniques[0].levelcomptech.inventer;
                //     ligne3.appendChild(cell5);

                // }
                // // tableau.appendChild(ligne3)

                // let ligne4 = document.createElement('tr');
                // for(let i = 0; i< d.competence_humaines.length;i++) {

                //     let qualite = document.createElement('td');
                //     qualite.textContent = d.competence_humaines[i].qualite;
                //     ligne4.appendChild(qualite)

                //     let etat = document.createElement('td');
                //     etat.textContent = d.competence_humaines[i].etat;
                //     ligne4.appendChild(etat)

                // }
                // // tableau.appendChild(ligne4)


        })



    });


  
    
    