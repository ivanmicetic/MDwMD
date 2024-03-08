# References

### Applications

- **Half life estimation in tissue**: Here they estimated the half-life of rhNGF in brain tissue to be 45min. Krewson, Christine E., and W. Mark Saltzman. "Transport and elimination of recombinant human NGF during long-term delivery to the brain." Brain research 727.1-2 (1996): 169-181. https://www.sciencedirect.com/science/article/pii/0006899396003782
- **Angiogenesis**: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0019989
- **Tumor growth**: The phase-field model in tumor growth. https://www.tandfonline.com/doi/full/10.1080/14786435.2010.501771. See also https://ieeexplore.ieee.org/abstract/document/8251268
- **Chemotaxis**: https://pubmed.ncbi.nlm.nih.gov/32855311/
- **(yet to read)**: organoid development. https://www.sciencedirect.com/science/article/pii/S2468451120300015
- **(yet to read)**: Here they point out that diffusion is relevant for accessing the brain https://www.nature.com/articles/nmat1159
- **(yet to read)**: They make a matematical model to study the degradation of tissue matrix or gel and relate it to diffusivity (?). https://link.springer.com/article/10.1007/s10237-013-0493-0. See also Dothe's thesis in https://scholar.colorado.edu/downloads/9s161655t.
- **(yet to read)**: It references to transferrin and sphingomyelinase studies related to diffusion. https://pubs.acs.org/doi/full/10.1021/mp300495e


Keep in mind what Gemini said:

- Reaction-Diffusion Equations: These models are fundamentally built around the diffusion of molecules and their subsequent reactions. Diffusion coefficients are essential parameters.
- Subcellular Element Model (SEM): When explicitly modeling the diffusion of proteins within the cell, SEMs heavily rely on diffusion coefficients.
- Continuum Models: Diffusion coefficients are frequently used in continuum models that account for the transport of proteins across tissues or within a simulated environment.

- Cellular Potts Model (CPM): CPMs can incorporate protein diffusion within the lattice, making diffusion coefficients a potential parameter depending on the specific model setup.
- Agent-Based Models (ABMs): ABMs that explicitly model the movement of individual proteins would rely on diffusion coefficients. More abstract ABMs might not need them directly.
- Vertex Models: Similar to ABMs, vertex models could incorporate diffusion coefficients if they need to describe protein transport or simulate the influence of gradients.
- Phase-Field Modeling: Sometimes uses a generalized diffusion coefficient to represent the transport of a field related to protein concentration, depending on the specific implementation.


### MD Related work

- **Diffusion coefficient from MD**: Here they estimated 4 diffusion coefficients with 20 MDs of 1ns, that reached a good linear model. However, it is clear that MD underestimated the true D.
Wang, Junmei, and Tingjun Hou. "Application of molecular dynamics simulations in molecular property prediction II: diffusion coefficient." Journal of computational chemistry 32.16 (2011): 3505-3519. https://onlinelibrary.wiley.com/doi/full/10.1002/jcc.21939

- **Diffusion of ubiquitin and a better estimator**: Hummer proposed a better estimator for D and applied it to ubiquitin, once more, underestimating the true D. 
Bullerjahn, Jakob Tómas, Sören von Bülow, and Gerhard Hummer. "Optimal estimates of self-diffusion coefficients from molecular dynamics simulations." The Journal of Chemical Physics 153.2 (2020).
https://pubs.aip.org/aip/jcp/article/153/2/024116/76262/Optimal-estimates-of-self-diffusion-coefficients


### HYDROPRO references:

- **Latest reference**: Explains the latest parametrization and last version of HYDROPRO. 
Ortega, Alvaro, D. Amorós, and J. García De La Torre. "Prediction of hydrodynamic and other solution properties of rigid proteins from atomic-and residue-level models." Biophysical journal 101.4 (2011): 892-898.
https://www.cell.com/biophysj/fulltext/S0006-3495(11)00776-4

- **Shell model**: Explains the shell model.
de la Torre, José García, María L. Huertas, and Beatriz Carrasco. "Calculation of hydrodynamic properties of globular proteins from their atomic-level structure." Biophysical journal 78.2 (2000): 719-730.
https://www.cell.com/fulltext/S0006-3495(00)76630-6

### Articles with experimental diffusion values

- **10.1016/S0006-3495(00)76630-6**: Main HYDROPRO calibration set. https://www.cell.com/fulltext/S0006-3495(00)76630-6
- **10.1021/ct600062y**: Used to calibrate HYDROPRO. https://pubs.acs.org/doi/10.1021/ct600062y
- **10.1002/mabi.200900474**: Used to calibrate HYDROPRO. https://onlinelibrary.wiley.com/doi/10.1002/mabi.200900474
- **10.1107/S0021889897003336**: https://onlinelibrary.wiley.com/doi/abs/10.1107/S0021889897003336
- **10.1002/jcc.21939**: Only 4 values. https://onlinelibrary.wiley.com/doi/full/10.1002/jcc.21939
- **10.1126/science.124.3235.1293**: Only 3 somatotropins (one already in DB). https://sci-hub.et-fine.com/10.1126/science.124.3235.1293
- **10.1152/jn.00352.2004**: Hydrodynamic radii obtained from diffusion coefficient. https://journals.physiology.org/doi/epdf/10.1152/jn.00352.2004
- **BioMThermDB**: DB of thermodynamic properties of proteins (browse diffusion coefficient). https://phys-biol-modeling.fkkt.uni-lj.si/
- **10.1002/bip.10023**: An NMR study with 4 proteins. https://pubmed.ncbi.nlm.nih.gov/11787001/
- **10.1038/nmat1489**: https://www.nature.com/articles/nmat1489
- **10.1073/pnas.101109798**: they measure some dilute and concentrated D values. https://www.pnas.org/doi/abs/10.1073/pnas.101109798
