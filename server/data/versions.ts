import type { Version } from '@shared/schema';

export const versionsData: Version[] = [
  {
    id: "2027.0",
    version: "2027.0",
    releaseDate: "2025-06-15",
    features: [
      {
        id: "2027.0-network-design",
        title: "Network Design (Tech Preview)",
        description: "Introduces automated preliminary sizing of gravity drainage networks. The tool determines pipe diameters and invert levels using a deterministic, constraint-based approach, evaluating candidate pipe configurations against hydraulic, geometric, and connectivity requirements. Design flows can be calculated from rainfall using IDF curve and the Rational Method, or defined directly. Processes dendritic networks sequentially from upstream to downstream, supports staged and iterative design workflows, evaluates multiple pipe candidates, and provides a comprehensive Design report with full transparency of the design process.",
        category: "Network Design",
        documentationUrl: "https://help.autodesk.com/view/IWICMS/2027/ENU/?guid=GUID-EF450CB6-647A-4BA9-90B0-C53E39C75128"
      },
      {
        id: "2027.0-home-tab",
        title: "New Home Tab",
        description: "The Home tab introduces a central entry point to InfoWorks ICM, giving quick access to databases, sample content, and key resources before entering the workspace. Displayed automatically when no GeoPlan tabs are open, allowing you to open existing databases, create new ones (on-premise or on-cloud), or explore featured sample databases that showcase product capabilities. A dedicated Discover area highlights curated content such as updates and learning resources.",
        category: "Interface/UI",
        documentationUrl: "https://help.autodesk.com/view/IWICMS/2027/ENU/?guid=GUID-EF450CB6-647A-4BA9-90B0-C53E39C75128"
      },
      {
        id: "2027.0-model-group-menu",
        title: "Enhanced Model Group Context Menu",
        description: "The Model Group context menu has been enhanced to provide a more structured and comprehensive access point for managing model workflows. Commands are now grouped by function, making it easier to create networks and shared objects, manage input data, run simulations, and analyse results directly from the Explorer Window. The updated menu brings together key actions such as simulation runs, calibration, risk analysis, and reporting tools, alongside utilities for validation and querying.",
        category: "Interface/UI",
        documentationUrl: "https://help.autodesk.com/view/IWICMS/2027/ENU/?guid=GUID-EF450CB6-647A-4BA9-90B0-C53E39C75128"
      },
      {
        id: "2027.0-subgrid-ground-level",
        title: "Subgrid Sampling - Improved Ground Level Reporting",
        description: "Ground level reporting for subgrid models has been enhanced across Network Results objects to improve accuracy and consistency. For Network Results points, lines, and polygons, ground level values are now derived from the underlying subgrid triangle (face) elevations rather than average or simplified representations, ensuring that minimum, maximum, and mean ground levels more accurately reflect local terrain variations within subgrid meshes.",
        category: "2D Modelling",
        documentationUrl: "https://help.autodesk.com/view/IWICMS/2027/ENU/?guid=GUID-EF450CB6-647A-4BA9-90B0-C53E39C75128",
        takeaway: "Your flood depth estimates in streets and around buildings will be more accurate without needing excessively fine meshes everywhere. Previously you had to choose between model size and accuracy near structures."
      },
      {
        id: "2027.0-ruby-upgrade",
        title: "Ruby Scripting Upgrade",
        description: "The embedded Ruby used for scripting in InfoWorks ICM has been upgraded from Ruby 2.4 to Ruby 3.4.6. This update provides a supported and maintained version and enables the use of external libraries through RubyGems. Scripts created with earlier Ruby versions may require updates to run correctly.",
        category: "Automation/Scripting",
        documentationUrl: "https://help.autodesk.com/view/IWICMS/2027/ENU/?guid=GUID-EF450CB6-647A-4BA9-90B0-C53E39C75128",
        takeaway: "Existing Ruby scripts may need minor updates, but you can now use modern Ruby gems and get better performance. Audit your scripts for deprecated syntax before upgrading."
      }
    ]
  },
  {
    id: "2026.3",
    version: "2026.3",
    releaseDate: "2024-12-03",
    features: [
      {
        id: "2026.3-subgrid-meshing",
        title: "Subgrid Meshing Improvements",
        description: "Expands the range of elements supported by Subgrid Sampling meshing, improving precision and consistency in 2D modelling. Now supports Porous Walls, Porous Polygons, Base/Sluice/Bridge Linear Structures, Infiltration Zones/Surfaces, Permeable Zones, and ground elevation resampling.",
        category: "Subgrid Sampling",
        documentationUrl: "https://help.autodesk.com/view/IWICMS/ENU/?guid=GUID-SubgridSampling"
      },
      {
        id: "2026.3-rasterizer",
        title: "Rasterizer Enhancements (Export 2D to Raster)",
        description: "Export 2D to Raster is no longer a Tech Preview. Now fully supported for non-cloud (Workgroup and Standalone) databases with coordinate reference system handling, performance improvements for large datasets, and removal of the 2 GB output size limit.",
        category: "2D Modelling",
        documentationUrl: "https://help.autodesk.com/view/IWICMS/ENU/?guid=GUID-Export2DToRaster"
      },
      {
        id: "2026.3-model-group-icons",
        title: "Improved Model Group Icons in Cloud Databases",
        description: "Cloud databases now update Model Group icons based on the contents of the folder - matching the behaviour that already existed in workgroup and standalone databases. When a Model Group contains only one type of object, its icon automatically changes to reflect that object type.",
        category: "Cloud",
        documentationUrl: "https://help.autodesk.com/view/IWICMS/ENU/?guid=GUID-CloudDatabase"
      },
      {
        id: "2026.3-connect-2d-boundaries",
        title: "Improved Handling of Inflow and Level Boundaries at Connect 2D Nodes",
        description: "Connect 2D Nodes now support inflow (qin) and water level (lev) boundary conditions applied consistently with 1D node behavior. Inflows are supported for Closed and Lost edges, while level boundaries apply to Lost edges. This enhancement delivers more predictable boundary interactions within 2D-1D connectivity.",
        category: "2D Modelling"
      },
      {
        id: "2026.3-odic-encoding",
        title: "Enhanced Encoding Support in ODIC Imports",
        description: "A new 'Assume UTF-8 encoding' option has been added to the ODIC file import workflow. When checked, imported files are treated as UTF-8 encoded; when unchecked, encoding defaults to the system locale. This restores flexibility that had been removed in earlier versions and improves compatibility with international datasets.",
        category: "Data Import/Export"
      }
    ]
  },
  {
    id: "2026.2",
    version: "2026.2",
    releaseDate: "2024-11-13",
    features: [
      {
        id: "2026.2-esri",
        title: "Esri Integration Features",
        description: "Enhanced integration with Esri GIS platforms for improved spatial data management and analysis.",
        category: "Integration"
      },
      {
        id: "2026.2-admin",
        title: "Project Administration Tools",
        description: "New administrative features for better project management and collaboration.",
        category: "Administration"
      }
    ]
  },
  {
    id: "2026.1",
    version: "2026.1",
    releaseDate: "2025-08-01",
    features: [
      {
        id: "2026.1-cloud",
        title: "Cloud Capabilities Enhancements",
        description: "Continued improvements to cloud integration that started in version 2024.0, enabling better cloud-based simulations and data management.",
        category: "Cloud",
        takeaway: "If you're already on cloud databases, you don't need to do anything — these improvements land transparently and tighten the gap with on-premise workflows."
      },
      {
        id: "2026.1-flood",
        title: "Autodesk InfoWorks ICM Flood",
        description: "New Autodesk product using ICM's hydrological and hydraulic modelling for event-based forecasting and risk assessment for networks up to 1000 nodes. Requires a Flood licence.",
        category: "Product"
      },
      {
        id: "2026.1-sewer-rebrand",
        title: "InfoWorks ICM Standard Rebranded as InfoWorks ICM Sewer",
        description: "The Autodesk product InfoWorks ICM Standard is rebranded as InfoWorks ICM Sewer. The Sewer product still uses a Standard licence and all functionality remains available.",
        category: "Product"
      },
      {
        id: "2026.1-ruby",
        title: "Ruby Scripts as Database Items",
        description: "Ruby scripts can now be added as database items with a new Ruby script editor to add, view, edit, validate syntax, and run scripts directly in the GeoPlan. Can also import external Ruby script files.",
        category: "Development"
      },
      {
        id: "2026.1-ruby-custom",
        title: "Ruby Scripts in Custom Actions",
        description: "Ruby Script database items can now be included in Custom actions, providing more flexible automation workflows.",
        category: "Development"
      },
      {
        id: "2026.1-subgrid-expansion",
        title: "Additional Network Objects for Subgrid Sampling",
        description: "Expanded Subgrid Sampling support to include River Reach - Bank Flows (when connected to 2D zones) and Inline banks (when acting as 1D-2D links).",
        category: "Subgrid Sampling"
      },
      {
        id: "2026.1-swmm-flow",
        title: "Display Improvement for Flow in SWMM Nodes",
        description: "Increased precision for node's Baseline inflow, Base flow, and Base flow for Additional DWF properties from 3 to 5 when using metric units.",
        category: "SWMM"
      },
      {
        id: "2026.1-swmm-stage-flow",
        title: "Importing InfoSWMM Stage-Flow Outfalls to SWMM Networks",
        description: "Stage-Flow type outfalls from InfoSWMM can now be imported to ICM SWMM networks as SWMM nodes with Free type output.",
        category: "SWMM"
      },
      {
        id: "2026.1-swmm-rating",
        title: "Importing InfoSWMM Rating Curve Outlets to SWMM Networks",
        description: "Outlets with Tabular Inflow-Outflow rating curves from InfoSWMM can now be imported as Outlet types with Functional/Depth Rating curves.",
        category: "SWMM"
      },
      {
        id: "2026.1-operator-client",
        title: "Autodesk ICMLive Operator Client for InfoWorks ICM Flood",
        description: "ICMLive Operator Client is installed with Autodesk InfoWorks ICM Flood, allowing Flood users to view areas of interest, see alerts, and analyze live run results.",
        category: "ICMLive"
      }
    ]
  },
  {
    id: "2026.0",
    version: "2026.0",
    releaseDate: "2025-04-01",
    features: [
      {
        id: "2026.0-cloud",
        title: "Cloud Capabilities Enhancements",
        description: "Continued improvements to cloud integration that started in version 2024.0.",
        category: "Cloud"
      },
      {
        id: "2026.0-subgrid",
        title: "Subgrid Sampling Technical Preview",
        description: "New method for enhancing topographic representation in InfoWorks 2D models with finer triangular mesh for each 2D element. Improves predictive ability without compromising performance or accuracy.",
        category: "Subgrid Sampling",
        takeaway: "First taste of subgrid sampling — try it on a single catchment before rolling it out widely. The Interactive Diagrams tab has a visual walkthrough of how it differs from adaptive refinement."
      },
      {
        id: "2026.0-subgrid-results",
        title: "Subgrid Sampling Results",
        description: "New results available for 2D zones with Subgrid Sampling: Mean depth, Volume (time-varying and summary), and Subgrid flag. Includes support for Network Results Point 2D objects.",
        category: "Subgrid Sampling"
      },
      {
        id: "2026.0-icmlive",
        title: "ICMLive for Autodesk InfoWorks ICM Ultimate",
        description: "ICMLive functionality now available in ICM Ultimate to convert hydrologic and hydraulic network models into near real-time forecasting systems. Includes Live groups, Action Lists, Alert Definition Lists, Manifests, and Manifest Deployments.",
        category: "ICMLive"
      },
      {
        id: "2026.0-operator",
        title: "Autodesk ICMLive Operator Client",
        description: "Now installed with Autodesk InfoWorks ICM as part of the ICMLive system for viewing and operating live simulations.",
        category: "ICMLive"
      },
      {
        id: "2026.0-swmm-validation",
        title: "SWMM Network Validation Performance",
        description: "Validation for SWMM networks with maximum depth set for Junction or Storage nodes is now significantly quicker.",
        category: "SWMM"
      },
      {
        id: "2026.0-tsd",
        title: "TSD Background Updates",
        description: "Updates of Scalar or Spatial time series data (TSD) can now be performed by InfoWorks ICM as a background process.",
        category: "Data Management"
      },
      {
        id: "2026.0-analytics",
        title: "Desktop Analytics Privacy Settings",
        description: "New Privacy Settings dialog for 64-bit versions (existing Data Collection dialog for 32-bit) to control usage analysis and help improve software quality.",
        category: "Administration"
      },
      {
        id: "2026.0-geoplan-perf",
        title: "GeoPlan Performance Improvements for 2D Meshes",
        description: "Improved GeoPlan performance when displaying large 2D meshes, with faster pan, zoom, and properties tools.",
        category: "Performance"
      },
      {
        id: "2026.0-cuda",
        title: "CUDA Update to 12.6.3",
        description: "Updated to CUDA 12.6.3. NVIDIA drivers may need updating for compatibility. Only cards with compute capability 5.0 or higher supported.",
        category: "System"
      }
    ]
  },
  {
    id: "2025.5",
    version: "2025.5",
    releaseDate: "2024-11-01",
    features: [
      {
        id: "2025.5-cloud",
        title: "Cloud Capabilities Enhancements",
        description: "Continued improvements to cloud integration that started in version 2024.0.",
        category: "Cloud"
      },
      {
        id: "2025.5-copy-results",
        title: "Copying Cloud Simulation Results",
        description: "Can now copy simulation results from cloud database runs (with full results downloaded) to transportable database version 2024.5 or newer. Enables sharing results between cloud and on-premise databases.",
        category: "Cloud"
      },
      {
        id: "2025.5-risk",
        title: "Risk Analysis Runs for Cloud Databases",
        description: "Risk analysis run objects can now be added to cloud databases. Simulations run on-premise but leverage cloud database infrastructure. Includes support for Damage functions, Damage receptors, and Risk impact zones.",
        category: "Cloud"
      },
      {
        id: "2025.5-netcdf",
        title: "NetCDF File Formats for Spatial TSD Objects",
        description: "Extended support for NetCDF source projection formats. Data on Latitude Longitude grid with WGS84 datum can be imported using NetCDF AUS.BOM option.",
        category: "Data Management"
      }
    ]
  },
  {
    id: "2025.4",
    version: "2025.4",
    releaseDate: "2024-10-01",
    features: [
      {
        id: "2025.4-viewer",
        title: "Autodesk InfoWorks ICM Viewer",
        description: "New viewer allowing users to view model data and analyze existing results without needing an Autodesk licence, only an Autodesk account required.",
        category: "Product"
      },
      {
        id: "2025.4-2d-histogram",
        title: "2D Mesh Element Histograms",
        description: "New feature to identify 2D mesh element areas smaller than specified minimum element size, helping detect model instability and simulation performance issues.",
        category: "Meshing"
      },
      {
        id: "2025.4-results-element",
        title: "Results element 2D objects",
        description: "Results Analysis database items can now contain read-only Results element 2D objects automatically generated from 2D Mesh Element Histogram for mesh inspection.",
        category: "Results"
      },
      {
        id: "2025.4-swmm-results",
        title: "Results analysis for SWMM networks",
        description: "Result analysis items now available for SWMM networks with Results point, line, polygon objects and Results element objects for 2D mesh interrogation.",
        category: "SWMM"
      },
      {
        id: "2025.4-muskingum",
        title: "Muskingum output routing method for InfoWorks subcatchments",
        description: "New Muskingum routing option for subcatchment outflow through notional reach with travel time and discharge weighting factor.",
        category: "Hydrology"
      },
      {
        id: "2025.4-rpa-export",
        title: "Exporting Return Period Analysis grid report to CSV",
        description: "New Export CSV button added to RPA report view for exporting results data to CSV files.",
        category: "Results"
      },
      {
        id: "2025.4-ruby-rpa",
        title: "Exporting RPA data to CSV using Ruby scripting",
        description: "New rpa_export Ruby script method for programmatically exporting RPA results to CSV.",
        category: "Development"
      },
      {
        id: "2025.4-ruby-rainfall",
        title: "Adding design rainfall events using Ruby scripting",
        description: "New new_synthetic_rainfall Ruby method for adding design rainfall events to models programmatically.",
        category: "Development"
      },
      {
        id: "2025.4-ruby-tsd",
        title: "Adding TSD objects using Ruby scripting",
        description: "New WSTSDObject class for adding TSD objects to database and accessing time series data via WSOpenTSD class methods.",
        category: "Development"
      },
      {
        id: "2025.4-state-performance",
        title: "State file initialisation time improvement",
        description: "Loading state files from simulations with different 2D meshes now 10-15 times faster, reducing initialisation time significantly.",
        category: "Performance"
      }
    ]
  },
  {
    id: "2025.3",
    version: "2025.3",
    releaseDate: "2024-09-01",
    features: [
      {
        id: "2025.3-cloud",
        title: "Cloud Capabilities",
        description: "Continued cloud integration building upon capabilities introduced in version 2024.0.",
        category: "Cloud"
      },
      {
        id: "2025.3-rpa-info360",
        title: "Return Period Analysis (RPA) Grid Report Export to Info360 Asset",
        description: "For Autodesk licence users, results data from RPA report view can now be exported and automatically uploaded to Info360 Asset. New Export Info360 button added to Return Period Analysis Grid Report dialog. RPA report view now includes Asset ID column (displays Asset ID if specified for conduit) and Surcharge due to flow column (checkbox indicates surcharge is due to flow).",
        category: "Results"
      },
      {
        id: "2025.3-buildings-drainage",
        title: "Buildings - Drainage Contribution for SUDS/LID Modeling",
        description: "Can now model impact of SUDS structure (e.g., rain barrel) without using SUDS control object. New Drainage contribution property specifies percentage of roof runoff entering drainage system via building's Drains to object, included in total outflow calculation. Remaining percentage is lost and excluded from total outflow. Requires database update to 2025.3.",
        category: "Modeling"
      },
      {
        id: "2025.3-buildings-perimeter",
        title: "Buildings - Perimeter Option for Exceedance Flow Type",
        description: "New Perimeter option available for Exceedance flow type. When selected, storm runoff from building's roof exceeding Capacity limit is directed to building boundary and included in 2D simulation. Allows modeling exceedance in 2D mesh without directing to node location.",
        category: "Modeling"
      },
      {
        id: "2025.3-swmm-base-flow",
        title: "Name Change for Additional DWF Baseline Property in SWMM Nodes",
        description: "For consistency with DWF section naming in SWMM nodes, Baseline property for Additional DWF properties renamed to Base flow. No change to behavior.",
        category: "SWMM"
      },
      {
        id: "2025.3-state-help-updates",
        title: "State Search Radius and State Power Parameter Help Updates",
        description: "Descriptions of State search radius and State power parameter fields in InfoWorks and SWMM 2D Parameters dialog updated for clarity. New Initial State Interpolation topic added to help providing further information about how these parameters are used.",
        category: "Documentation"
      }
    ]
  },
  {
    id: "2025.2",
    version: "2025.2",
    releaseDate: "2024-07-01",
    features: [
      {
        id: "2025.2-cloud",
        title: "Cloud Capabilities",
        description: "Continued cloud integration building upon capabilities introduced in version 2024.0.",
        category: "Cloud"
      },
      {
        id: "2025.2-export-2d-raster",
        title: "Export 2D to Raster (Tech Preview)",
        description: "New efficient way to export 2D results as raster TIFF image files for import into GIS and analysis systems. Available for 2D cloud simulations with downloaded summary results. Can export time varying or summary results, all attributes or selected attributes. For time varying results, can export single timestep or all saved timesteps with timestep multiplier control. New Export 2D to raster option in Results menu opens Export 2D to Raster dialog for specifying units, resolution, and save location.",
        category: "Results"
      },
      {
        id: "2025.2-cloud-quota-dialog",
        title: "Cloud Simulation Quota Dialog",
        description: "New Cloud Simulation Quota dialog displays when running or re-running simulations for cloud databases, informing about implications of monthly quotas for concurrent cloud simulation usage. Includes 'Do not show this dialog again' checkbox (checked by default) to suppress dialog in current software version.",
        category: "Cloud"
      },
      {
        id: "2025.2-swmm-import-logs",
        title: "SWMM5 and InfoSWMM Import Logs Improvements",
        description: "Improved messages in import logs from SWMM5 text files and InfoSWMM models. Previously misleading messages about empty sections (INFLOWS, PATTERNS) now inform users they can ignore if data not required or provide necessary information. InfoSWMM conduit import messages now ask users to verify From Node ID and To Node ID fields are populated in Link Connectivity table when conduits have no matching Coordinates or Xsections.",
        category: "Data Management"
      },
      {
        id: "2025.2-2d-depth-noise-filter",
        title: "2D Depth Noise Filter",
        description: "New 2D depth noise filter reduces numerical noise caused by numbers below floating point precision. Results previously not updated due to very low depths can now be updated. May have minor impact on 2D models with very low depths, mainly infiltration models with Green-Ampt, Horton, Deficit, Constant Loss, and CNSWMM infiltration surfaces. Requires database update to 2025.2.",
        category: "Performance"
      }
    ]
  },
  {
    id: "2025.1",
    version: "2025.1",
    releaseDate: "2024-05-01",
    features: [
      {
        id: "2025.1-cloud",
        title: "Cloud Capabilities",
        description: "Continued cloud integration building upon capabilities introduced in version 2024.0.",
        category: "Cloud"
      },
      {
        id: "2025.1-cnswmm-infiltration",
        title: "CNSWMM Infiltration Model for 2D Simulations",
        description: "New CNSWMM infiltration model for InfoWorks networks combines CNSWMM curve number model with initial losses. New CNSWMM option added to Infiltration type property for Infiltration Surface (2D) objects. Added properties: Initial abstraction factor (defines initial loss), Curve number, and Drying time. Initial conditions 2D modified to enable CNSWMM modeling with new CNSWMM antecedent moisture condition property representing initial soil moisture condition before rainfall event. Requires database update to 2025.1.",
        category: "Modeling"
      },
      {
        id: "2025.1-cloud-download-robust",
        title: "Downloading Data from the Cloud",
        description: "Software now more robust when data transferred from cloud is not fully downloaded correctly.",
        category: "Cloud"
      },
      {
        id: "2025.1-download-job-type",
        title: "Job Type - Download from Cloud",
        description: "New Download from cloud job type created for each simulation selected for results download. Job status viewable in Job Control window.",
        category: "Cloud"
      },
      {
        id: "2025.1-swmm-groundwater",
        title: "SWMM5 Groundwater Import and Export Enhancements",
        description: "Import behavior changed: Egwt, Ebot, Egw, and Umc fields that are blank or * in SWMM5 GROUNDWATER section now imported as blank (no value) instead of 0 in subcatchment Groundwater threshold, Aquifer elevation, Aquifer initial ground water elevation, and Aquifer initial ground water moisture content fields. During simulation, fields assigned values from associated Aquifer. Export behavior: Fields without values now exported as * in SWMM5 file.",
        category: "SWMM"
      },
      {
        id: "2025.1-groundwater-validation",
        title: "Validation Message for Groundwater Threshold",
        description: "New warning message W22219 displayed when Groundwater threshold set to 0 in SWMM subcatchment.",
        category: "SWMM"
      },
      {
        id: "2025.1-roughness-validation",
        title: "Validation Message for Roughness Definitions",
        description: "New warning message W2504 displayed when Roughness definition object specified for InfoWorks or SWMM 2D zone but object does not exist in current network.",
        category: "Validation"
      }
    ]
  },
  {
    id: "2025.0",
    version: "2025.0",
    releaseDate: "2024-04-01",
    features: [
      {
        id: "2025.0-cloud",
        title: "Cloud Capabilities",
        description: "Continued cloud integration building upon capabilities introduced in version 2024.0.",
        category: "Cloud"
      },
      {
        id: "2025.0-tsd-cloud",
        title: "Time Series Data (TSD) Objects in Cloud Databases",
        description: "Scalar and Spatial TSD objects now available in cloud databases with some limitations. Provides intermediate store between external data sources (SCADA/telemetry, RADAR) and InfoWorks/SWMM runs. TSD objects were previously known as TSDB objects. Requires TSD option enabled on licence.",
        category: "Cloud"
      },
      {
        id: "2025.0-tvd-connectors",
        title: "TVD Connectors in Cloud Simulations",
        description: "TVD connectors, which require input from TSD objects, can now be used in cloud simulations.",
        category: "Cloud"
      },
      {
        id: "2025.0-spatial-rain",
        title: "Spatial Rain Sources and Zones in Cloud",
        description: "Spatial rain sources and spatial rain zones, requiring input from Spatial TSD or TVD connector rain gauge polygons, can now be used in cloud simulations.",
        category: "Cloud"
      },
      {
        id: "2025.0-run-view-tsd",
        title: "Run View TSD Options for Cloud Databases",
        description: "Use TSD checkbox now enabled in Schedule Hydraulic Run View for cloud databases, allowing switch between standard events and time series data. TSD option button displays TSD Options dialog for selecting user edits when TSD objects are selected for a run.",
        category: "Cloud"
      },
      {
        id: "2025.0-copying-dialog",
        title: "Copying of Simulation Results, Ground Models and TSD Objects Dialog",
        description: "New dialog displayed when copying data to cloud databases. Copy time series data options disabled when copying TSD objects from cloud database since TSD objects in cloud cannot be copied to other cloud, on-premise or transportable databases.",
        category: "Cloud"
      },
      {
        id: "2025.0-results-manager-download",
        title: "Downloading Results Using Results Manager",
        description: "Results Manager can now download cloud simulation results to local results folder. New download options added to Results Management grid view popup menu: Download full results and Download summary results.",
        category: "Results"
      },
      {
        id: "2025.0-results-grid-columns",
        title: "Column Changes in Results Management Grid",
        description: "New Local results type column added to Results Management grid view indicating whether full results, summary results, or no results have been downloaded from cloud. Size column now displays file size in MB instead of KB.",
        category: "Results"
      },
      {
        id: "2025.0-results-manager-delete",
        title: "Deleting Results Using Results Manager",
        description: "Two new deletion options added to Results Management grid view popup menu for cloud simulations: Delete all local results files and Delete local non-summary results files.",
        category: "Results"
      },
      {
        id: "2025.0-export-files",
        title: "Exporting Results to Files from Results Menu",
        description: "Export to binary files, CSV export, and Export to files menu options now prompt to download full results when selecting cloud simulation with summary results or no results downloaded.",
        category: "Results"
      },
      {
        id: "2025.0-export-gis-menu",
        title: "Exporting Results to GIS from Results Menu",
        description: "Export to GIS now prompts to download full results for cloud simulations with summary/no results. Export maxima to GIS now works with summary results or prompts to download if no results available, with Download Cloud Results dialog for choosing full or summary.",
        category: "Results"
      },
      {
        id: "2025.0-export-gis-explorer",
        title: "Exporting GIS Results from Explorer Window",
        description: "Summary results for cloud simulations can now have maximum results exported from Explorer window via Export Results to MIF/TAB/SHP/Geodatabase. Only maximum results exported for summary results; full results required for time varying results.",
        category: "Results"
      },
      {
        id: "2025.0-flood-contours",
        title: "Exporting Maximum Flood Contours",
        description: "Maximum flood contour export to MapInfo (MIF/TAB) or ESRI (SHP/ASCII grid ASC) now works with downloaded summary results and cloud simulations with no results downloaded. Download Cloud Results dialog displays for simulations with no results.",
        category: "Results"
      },
      {
        id: "2025.0-report-generation",
        title: "Generating Reports from Results Menu",
        description: "Grid reports (Return period analysis, Flood volume, Worst case, Velocity profile) now work with downloaded summary results. UPM river impact prompts to download full results. Statistical reports work with summary results or prompt to download if no results available.",
        category: "Results"
      },
      {
        id: "2025.0-results-toolbar",
        title: "Results Toolbar Updates",
        description: "Graph, Grid, Graph selected objects, and Grid selected objects buttons on Results toolbar now available for cloud simulations with summary results downloaded (previously required full results).",
        category: "Results"
      },
      {
        id: "2025.0-ground-model-limit",
        title: "Increase in Ground Model Size Limitation",
        description: "Ground model size limit for copying to cloud databases increased from 2GB to 5GB.",
        category: "Cloud"
      },
      {
        id: "2025.0-recycle-bin",
        title: "Duplicate Items in Recycle Bin Handling",
        description: "Items found in cloud database Recycle bin with same GUID no longer trigger Copying of Duplicate Items dialog. Copied item automatically assigned new GUID and appears in Explorer without ! appended to name. Items referencing this item will reference it rather than duplicate in recycle bin.",
        category: "Data Management"
      },
      {
        id: "2025.0-culvert-2d",
        title: "Culvert 2D Type of Conduit",
        description: "New Culvert (2D) conduit type for InfoWorks networks allows unidimensional hydraulic structures directly in 2D engine for flow transfer between 2D zone areas. Properties similar to 1D culverts with automatic reverse flow as outlet modeling. Additional Min space step property ensures computational cell within Culvert 2D cannot be smaller than specified minimum. Requires database update to 2025.0.",
        category: "Modeling"
      },
      {
        id: "2025.0-2d-line-connect",
        title: "2D Line Connect",
        description: "New 2D line connect line type represents flow exchange boundary for InfoWorks networks. Associates Connect 2D node (Node type 2D, Connection type 2D line) to multiple 2D mesh elements intersecting the line for flow exchange calculation between 2D surface and node. New theme added to GeoPlan with solid line between start/end coordinates and dashed line to Connect 2D node. Requires database update to 2025.0.",
        category: "Modeling"
      },
      {
        id: "2025.0-level-2d-zone",
        title: "Level in 2D Zone Result Update for Connect 2D Nodes",
        description: "Level in 2D Zone result reporting for Connect 2D nodes now depends on connection type: Closed/Lost/Break reports undefined (previously 0); 2D connection type reports undefined if depth is 0 (previously reported level regardless); new 2D line connection type reports maximum level amongst associated 2D elements or undefined if depth is zero in all. Requires database update to 2025.0.",
        category: "Results"
      },
      {
        id: "2025.0-bank-spill-performance",
        title: "Performance Improvements for Bank Spills",
        description: "Bank segmentation now done in parallel with reduced memory re-allocations when inserting bank points for computational nodes and 2D faces, speeding up network loading. Calculation of next bank point with new section now cached instead of searching from current point, speeding up simulations.",
        category: "Performance"
      },
      {
        id: "2025.0-conduit-shape",
        title: "Conduit Shape Restriction Removed",
        description: "Shape ID property restriction for Conduit (2D) or Linear Drainage (2D) conduit types removed. Can now choose any available shapes for these conduit types (previously limited to CIRC or RECT).",
        category: "Modeling"
      },
      {
        id: "2025.0-licence-wizard",
        title: "Innovyze Licence Setup Wizard Updates",
        description: "Innovyze local and network soft/dongle licence types no longer supported. Removed wizard pages: Specify Floating Licence Server, Licence Check In/Check Out, Licence Action, Update, Apply Update, Create Status File, CD Key, Apply Licence, Deactivate, Test Dongle. Settings page updated to remove licence type requirement (Thales server name/IP still required). Default UI/Engine sizes now set to ICM: Unlimited Nodes Unlimited Elements.",
        category: "Licensing"
      },
      {
        id: "2025.0-concurrent-install",
        title: "Concurrent Installations of Innovyze and Autodesk ICM",
        description: "Can now install Innovyze versions of ICM/ICMLive/InfoAsset Manager and Autodesk ICM versions with same version number concurrently. Can change between Autodesk Standard and Ultimate versions from same installer. Feature access limited to licence type regardless of product.",
        category: "Installation"
      },
      {
        id: "2025.0-engine-compilers",
        title: "Simulation Engine Compiler Updates",
        description: "Cloud and on-premises simulation engine compilers updated to meet security requirements and improve consistency. May cause result differences for numerically sensitive models where solution is on edge of mode (e.g., pumps on/off), oscillates between modes, or has convergence difficulty. Impacts all database versions.",
        category: "Performance"
      },
      {
        id: "2025.0-water-quality-performance",
        title: "Water Quality Simulation Performance Improvement",
        description: "Increased multi-threading for water quality calculations in Sim engine improves water quality simulation performance.",
        category: "Performance"
      },
      {
        id: "2025.0-tsdb-rename",
        title: "Name Change for Time Series Database (TSDB) Objects",
        description: "Time Series Database (TSDB) and Spatial Time Series Database objects renamed to Scalar time series data and Spatial time series data objects respectively. No other changes to objects; existing TSDB objects remain valid. InfoWorks Exchange names and short codes unchanged. 1D Urban Network Tutorial still references TSDB objects.",
        category: "General"
      },
      {
        id: "2025.0-workgroup-rename",
        title: "Name Change for Workgroup Data Server",
        description: "Workgroup Data Server renamed to Workgroup Server. Application folder renamed to InfoWorks Workgroup Server and no longer includes release year in name.",
        category: "General"
      },
      {
        id: "2025.0-infowoks-cs-meshes",
        title: "2D Meshes Imported from InfoWorks CS No Longer Supported",
        description: "InfoWorks CS data import deprecated in version 2023.1. 2D meshes imported from InfoWorks CS but not re-meshed in ICM are no longer supported.",
        category: "General"
      },
      {
        id: "2025.0-cuda-update",
        title: "CUDA Update to Version 11.7",
        description: "CUDA updated to version 11.7. GPU drivers may need updating to version compatible with CUDA 11.7.",
        category: "Performance"
      },
      {
        id: "2025.0-exchange-docs",
        title: "InfoWorks Exchange and Ruby Scripting Documentation",
        description: "InfoWorks Exchange documentation (previously downloadable) now part of product help accessible via table of contents. Introduction to Ruby Scripting in InfoWorks documentation now included in ICM Help.",
        category: "Documentation"
      }
    ]
  },
  {
    id: "2024.5",
    version: "2024.5",
    releaseDate: "2024-01-01",
    features: [
      {
        id: "2024.5-cloud",
        title: "Cloud Capabilities Enhancements",
        description: "Continued improvements to cloud integration that started in version 2024.0.",
        category: "Cloud"
      },
      {
        id: "2024.5-download-choice",
        title: "Choose Simulation Results Download Type",
        description: "New Download Cloud Results dialog lets you select which type of results to automatically download (full or summary) when simulations complete. Full results always remain available in the cloud.",
        category: "Cloud"
      },
      {
        id: "2024.5-download-options",
        title: "Additional Download Options for Cloud Results",
        description: "More flexible result downloading: batch download for multiple simulations, right-click download options for full or summary results, and upgrade summary results to full results.",
        category: "Cloud"
      },
      {
        id: "2024.5-delete-results",
        title: "Deleting Results for Cloud Simulations",
        description: "Two new deletion options: Delete all local results and Delete local non-summary results. Full results remain available for download from cloud.",
        category: "Cloud"
      },
      {
        id: "2024.5-exchange-download",
        title: "Downloading Results Using ICM Exchange",
        description: "New WSApplication.launch_sims_ex method with additional options including RunOn and DownloadSelection. WSSimObject run_ex method has new DownloadSelection key.",
        category: "Integration"
      },
      {
        id: "2024.5-rafts",
        title: "Increased Values for Equivalent Manning's n",
        description: "RAFTS routing model limits for Equivalent Manning's n increased from 0.01-0.1 to 0.001-2.0. Values above 0.25 trigger warnings. PERN values for >0.1 found by linear extrapolation.",
        category: "Hydrology"
      }
    ]
  },
  {
    id: "2024.4",
    version: "2024.4",
    releaseDate: "2023-11-01",
    features: [
      {
        id: "2024.4-cloud",
        title: "Cloud Capabilities",
        description: "Continued cloud integration building upon capabilities introduced in version 2024.0.",
        category: "Cloud"
      },
      {
        id: "2024.4-exchange-cloud",
        title: "ICM Exchange Cloud Simulations",
        description: "Cloud simulations can now be started from ICM Exchange, extending automation capabilities to cloud-based runs.",
        category: "Integration"
      },
      {
        id: "2024.4-shortcut-keys",
        title: "Shortcut Keys for Meshing and Deletion",
        description: "New keyboard shortcuts to streamline workflow: CTRL+M for Model > Meshing > Mesh 2D zones (displays Mesh 2D Zones dialog for generating mesh elements within selected 2D Zones); Ctrl+U for Model > Update from ground model (InfoWorks only, displays Update from Ground Model dialog for updating River Line sections, Storage/Pond Node level-area data, Base Linear Structure irregular crest levels, and Bridge Linear Structure irregular invert levels by sampling Ground Model); Delete key for Selection > Selection operations > Delete all selected objects (deletes selected objects on GeoPlan).",
        category: "User Interface"
      },
      {
        id: "2024.4-cnswmm-infiltration",
        title: "CNSWMM Infiltration Implementation in InfoWorks Simulations",
        description: "Fixed infiltration calculation discrepancy between InfoWorks and SWMM simulations using CNSWMM/Curve Number models. Previously, SIM engine passed combined run-on and rainfall value while SWMM engine passed them separately, producing different results for identical models. Now SIM engine passes rainfall and run-on as separate values to SWMM curve number infiltration code, matching SWMM simulation behavior. Applies to database versions 2024.4 and later. Requires database update to 2024.4.",
        category: "Modeling"
      },
      {
        id: "2024.4-qm-log-messages",
        title: "Changes to QM Trajectory Solver Failed to Converge Log Messages",
        description: "Improved water quality simulation logging for InfoWorks networks to reduce log file size. Previously, Warning 802 produced for every link trajectory solver convergence failure, creating very large log files. Now single Warning 1179 produced if trajectory solver failed to converge. With timestep log enabled on Diagnostics dialog, list of links with convergence failures and failure counts added to log (e.g., '100.1 1429', '110.1 1010'). Simulation status remains 'completed but with warnings' if no other issues encountered.",
        category: "Water Quality"
      },
      {
        id: "2024.4-on-demand-training",
        title: "On-Demand Training",
        description: "New on-demand training modules available with video explanations for each topic. Provides additional information beyond Basic Tutorial including administrative topics such as data storage and sharing, and configuring file locations.",
        category: "Documentation"
      },
      {
        id: "2024.4-trace-caching",
        title: "Simulation Results Trace Caching",
        description: "New trace caching for on-premise simulations improves performance of graphs and statistics reports, especially when results files stored on remote shared network drives. Additional results files automatically generated by ICM if agents configured to do so (stores data efficiently for trace results). For each IWR, IWQ, and 2DR results file, up to two cached trace files may be generated: T2 suffix for results timestep traces, T3 suffix for gauge traces. Configuration via Agent Options dialog using IWRTRACECACHEGEN keyword. Can manually generate cached files for existing simulations using command line utility without re-running.",
        category: "Performance"
      }
    ]
  },
  {
    id: "2024.3",
    version: "2024.3",
    releaseDate: "2023-09-01",
    features: [
      {
        id: "2024.3-cloud",
        title: "Cloud Capabilities",
        description: "Continued cloud integration building upon capabilities introduced in version 2024.0.",
        category: "Cloud"
      },
      {
        id: "2024.3-xpswmm-infoworks",
        title: "Importing XPSWMM/XPStorm Objects to InfoWorks Networks",
        description: "Improved XPX file import to InfoWorks networks: XPX Fill Areas imported as Mesh level zone objects (Elevation property set, Vertex elevation type set to Always); XPX Head Velocity Points imported as Network Results Point (2D) objects; XPX Cross Sections imported as Cross section line objects; XPX 1D/2D Interface Lines imported as General line objects; Default Area Type polygons set to Inactive now imported with Category property set to Imported XPX Inactive Area (previously Void).",
        category: "Data Management"
      },
      {
        id: "2024.3-xpswmm-model-groups",
        title: "Importing XPSWMM/XPStorm Data to InfoWorks Model Groups",
        description: "XPSWMM/XPStorm data can now be imported to InfoWorks model groups. Applicable XPX data imported to database items within model group: Inflow, Level, Network, Rainfall event, Run. New Import InfoWorks Model group from XPSWMM/XPStorm model option added to model group popup menu.",
        category: "Data Management"
      },
      {
        id: "2024.3-xpswmm-swmm",
        title: "Importing XPSWMM/XPStorm Objects to SWMM Networks",
        description: "Improved XPX file import to SWMM networks: XPX Fill Areas now imported as Mesh level zone objects (Elevation property set, Vertex elevation type set to Always in Vertices Editor).",
        category: "Data Management"
      },
      {
        id: "2024.3-subcatchment-properties",
        title: "Subcatchment Properties for InfoWorks Networks",
        description: "Limited fields displayed in subcatchment property sheets to only those relevant to selected properties, improving usability. Runoff group shows only fields applicable to selected Runoff volume type in referenced Runoff Surface (Standard percentage runoff, SPR calculation, WRAP soil type, Drying time, Maximum soil moisture capacity, ReFH/ReFH2 Parameters, Baseflow calculation, Soil moisture deficit, SRM parameters). Routing group shows only fields applicable to selected Routing model in referenced Runoff Surface (Unit hydrograph, Time of concentration method, Manning's n, Hydraulic radius, tc/tp/tb/tl, Peaking coefficient, RAFTS parameters, Cascade parameters). Some fields may be read-only or editable based on model selection.",
        category: "User Interface"
      },
      {
        id: "2024.3-grid-column-order",
        title: "Factory Default Column Order Change for InfoWorks Grids",
        description: "Factory default column order for nodes, links, and subcatchments grids changed to match property sheet field order. New networks use property sheet order automatically. Existing networks can apply via Factory default option in Load Network Editor Properties dialog. Previous default can be restored by saving grid layout from pre-2024.3 network as default.",
        category: "User Interface"
      },
      {
        id: "2024.3-property-sheet-layouts",
        title: "Import and Export Property Sheet Layouts to XML Files",
        description: "Local layouts for property sheets (group names, group order, property order, node button state) can be exported to or imported from XML files for sharing between users. Can export currently displayed object/result layout or all layouts in current network. Imported layouts stored on local machine and overwrite existing local layouts. If XML lacks layout for object/result, existing local layout used.",
        category: "User Interface"
      }
    ]
  },
  {
    id: "2024.2",
    version: "2024.2",
    releaseDate: "2023-07-01",
    features: [
      {
        id: "2024.2-cloud",
        title: "Cloud Capabilities",
        description: "Continued cloud integration building upon capabilities introduced in version 2024.0.",
        category: "Cloud"
      },
      {
        id: "2024.2-xpswmm-improvements",
        title: "Importing XPSWMM/XPStorm Objects to InfoWorks Networks",
        description: "Comprehensive XPX import improvements: Only active nodes (Hydraulic/Runoff layers) imported, inactive nodes excluded; Links imported only if both US/DS nodes active in Hydraulic layer; Dual drainage system nodes set Ground/Flood/Chamber roof levels to relevant channel invert elevation, Chamber floor to conduit invert; Natural conduits connected to nodes with inlet capacity now imported as channels with Overland System type; Active nodes with Inlet capacity imported as Inlet nodes (Flood type set to Inlet if checked, else Ponding type); Head discharge table generated for Maximum Capacity Only/Rated By Approach Depth, Flow efficiency table for Rated By Approach Flow; Active Runoff layer nodes with active subcatchment data imported with automatic circular boundary polygon if none exists (area from XPX Area value).",
        category: "Data Management"
      },
      {
        id: "2024.2-xpswmm-rainfall",
        title: "Importing XPStorm/XPSWMM Rainfall to Rainfall Event",
        description: "Rainfall data from XPX files can now be imported to Rainfall events in InfoWorks networks. See Importing Event Data and Importing and Exporting Rainfall Events documentation for details.",
        category: "Data Management"
      },
      {
        id: "2024.2-feh2022",
        title: "FEH2022 Design Rainfall Events",
        description: "New FEH2022 design rainfall generator available for generating rainfall events. Download rainfall data as XML files from Flood Estimation Handbook web service and import via Rainfall Generator dialog. Data passed to ReFH2 application from Wallingford HydroSolutions (WHS) which generates appropriate rainfall hyetograph for the event. Requirements: FEH web service access and ReFH2 software licence (version 4.0.8560 or newer) obtained from WHS.",
        category: "Hydrology"
      },
      {
        id: "2024.2-subcatchment-drains-fields",
        title: "Irrelevant Subcatchment Drains to Fields Hidden for InfoWorks Networks",
        description: "Limited fields displayed in subcatchment property sheets to only those relevant to selected Drains to option. Applies to: Node ID, Link suffix, To Subcatchment ID, 2D point ID, Lateral links, Lateral weights. Previously irrelevant fields were disabled but visible.",
        category: "User Interface"
      },
      {
        id: "2024.2-dbver-file",
        title: "Database Version (DBVER) File for Working and Results Folders",
        description: "New DBVER.DAT text file containing database path and version automatically added to Working folder, Results folder, and Remote Roots folder (if applicable) when creating new database. File updated when database version updated or cloud database renamed.",
        category: "Data Management"
      },
      {
        id: "2024.2-exchange-ultimate",
        title: "ICM Exchange for Autodesk Ultimate",
        description: "ICM Exchange (IExchange implementation) now available for Autodesk Ultimate licence users. Advanced programming feature enables administrators to run Ruby scripts from command prompt.",
        category: "Integration"
      }
    ]
  },
  {
    id: "2024.1",
    version: "2024.1",
    releaseDate: "2023-06-01",
    features: [
      {
        id: "2024.1-cloud",
        title: "Cloud Capabilities",
        description: "Continued cloud integration building upon capabilities introduced in version 2024.0.",
        category: "Cloud"
      },
      {
        id: "2024.1-transportable-databases",
        title: "Transportable Databases for Copying Data Between Cloud and On-premise Databases",
        description: "Transportable databases can now copy data (excluding results) between cloud databases and standard workgroup or standalone on-premise databases. Enables data transfer across database types. See Copying Data Between Databases, Transportable Databases, and Differences Between Working with Cloud and On-premise Databases documentation.",
        category: "Cloud"
      },
      {
        id: "2024.1-section-window",
        title: "Section Window",
        description: "New Section Window displays ground levels and water levels by drawing section through opened network or simulation when Ground Model loaded. Ground levels interpolated from ground model. For networks with 2D zones with generated mesh, intersecting 2D zone mesh element heights may be included. Configurable flood section trace properties: Ground model line, Ground fill beneath line, Flood level line, Mesh ground level line. Section Properties dialog controls display. Replaces Flooding Section Window which only allowed sections through simulations; new Section Window works even without results available.",
        category: "Visualization"
      },
      {
        id: "2024.1-culvert-outlets",
        title: "Culverts or Culvert Conduits Connection to Outlet Nodes (1D or 2D)",
        description: "In InfoWorks networks, culvert outlets, culvert inlets (with Reverse flow model set to Outlet), and culvert type conduits can now connect to 1D and 2D outfall type nodes for easier floodplain culvert modeling. Channel velocity set to zero when no downstream channel exists. Network validation updated to allow: Culvert outlet to DS Node (Outfall/Outfall 2D), Culvert inlet (Reverse flow model=Outlet) to US Node (Outfall/Outfall 2D), Conduit (Conduit type=Culvert) to US Node (Outfall/Outfall 2D), Conduit (Conduit type=Culvert, Reverse flow model=Outlet) to DS Node (Outfall/Outfall 2D). Validation messages E2553 and E2578 updated to inform about outfall type node connections. Requires database update to 2024.1.",
        category: "Modeling"
      },
      {
        id: "2024.1-orifice-sluice-opening",
        title: "Bottom or Side Opening for Orifices and Sluices",
        description: "New Opening type property (Bottom or Side) added to Orifices and Sluices in InfoWorks networks. Bottom opening orifices model scenarios like ditches draining to underlying conduits. Bottom setting uses Secondary discharge coefficient of 0.587 (default) providing EPA SWMM equivalent results. When Bottom selected: Overgate discharge coefficient disabled for all sluice types; Gate depth disabled for vertical and variable vertical sluices. Default Opening type for new objects is Side; existing objects have blank (not set) Opening type. Bottom opening orifices/sluices display with zero height in Long Section view. Requires database update to 2024.1.",
        category: "Modeling"
      },
      {
        id: "2024.1-local-folders",
        title: "Options Dialog - Local Folders",
        description: "Local Folders tab in Options dialog now checks if specified folder Location contains current database. If detected, Clean unused files and Open folder with Windows Explorer buttons disabled to prevent database damage. Message displayed when clicking OK or Apply informing current database stored in selected Location.",
        category: "User Interface"
      },
      {
        id: "2024.1-inline-bank-preprocessing",
        title: "Improvements to Inline Bank Pre-processing",
        description: "Inline bank pre-processing speed significantly improved. Example: network with 10,000 inline banks for dry weather flow previously taking several hours now pre-processes in minutes.",
        category: "Performance"
      },
      {
        id: "2024.1-legacy-database-cancel",
        title: "Legacy Database Run Dialog Improvements",
        description: "Legacy Database Run dialog now includes Cancel button. Dialog displayed when running/re-running simulation for non-latest database version while using latest software version. Cancel button stops current simulation allowing database update before re-running with latest engine enhancements.",
        category: "User Interface"
      },
      {
        id: "2024.1-buildings-custom-graphs",
        title: "Simulation Results for Buildings in Custom Graphs",
        description: "Buildings simulation results can now be displayed in Custom Graphs.",
        category: "Visualization"
      },
      {
        id: "2024.1-cloud-sim-logout",
        title: "Running Cloud Simulations When Logged Out of Windows",
        description: "Cloud simulation connections no longer lost when logging out of Windows. Improves reliability for long-running cloud simulations.",
        category: "Cloud"
      },
      {
        id: "2024.1-cloud-access-warning",
        title: "Warning Displayed When Unable to Access Cloud Database",
        description: "When opening/creating cloud database via cloud image in Open/Create dialog, message displayed if hub not configured or user not added to appropriate hub team. Message prompts user to contact administrator for hub provisioning.",
        category: "Cloud"
      },
      {
        id: "2024.1-agent-manager",
        title: "Agent Manager Service Auto-start",
        description: "InfoWorks Agent Manager Service (manages local and remote agents) now automatically started when InfoWorks ICM installed. Previously required manual start before running simulations.",
        category: "General"
      },
      {
        id: "2024.1-sch-naming",
        title: "Naming Convention for SCH Files",
        description: "Restored SCH file naming convention (internal files used by agent coordinator for on-premise simulations) to include submitting user's name. Convention excluded in versions after 2021.9.3, now restored.",
        category: "General"
      },
      {
        id: "2024.1-swid-tags",
        title: "Software ID (SWID) Tags",
        description: "SWID tags now included in InfoWorks ICM to help identify software versions.",
        category: "General"
      },
      {
        id: "2024.1-xpviewer-link",
        title: "XPViewer Download Link",
        description: "XPViewer installer download link added to Importing XPSWMM/XPStorm Network Data to SWMM Networks and Importing XPSWMM/XPStorm Network Data to InfoWorks Networks documentation topics.",
        category: "Documentation"
      },
      {
        id: "2024.1-tutorial-download",
        title: "Tutorial Files Available for Download",
        description: "Tutorial files not installed with software. Download link for tutorial data now included in Downloading the tutorial example data documentation.",
        category: "Documentation"
      },
      {
        id: "2024.1-check-updates-removed",
        title: "Check for Updates Menu Option Removed",
        description: "Check for updates option removed from Help menu (previously opened InfoCare Support portal). Users should contact support for software update information.",
        category: "General"
      },
      {
        id: "2024.1-master-term-removal",
        title: "Removal of the Term Master",
        description: "Term 'Master' removed from software and help. File options renamed: 'Open/Create master database' → 'Open/Create database', 'Open another master database' → 'Open another database'. 'Master Group' → 'Group'. No functionality changes, only terminology updates. Some help images may still show old terms pending updates.",
        category: "General"
      },
      {
        id: "2024.1-infinity-removal",
        title: "Infinity System Configuration Removal",
        description: "Legacy database item Infinity System Configuration no longer supported in InfoWorks ICM. All references removed from help documentation.",
        category: "General"
      }
    ]
  },
  {
    id: "2024.0",
    version: "2024.0",
    releaseDate: "2023-04-01",
    features: [
      {
        id: "2024.0-cloud-databases",
        title: "Cloud Master Databases",
        description: "First release introducing cloud-based SaaS deployment for Autodesk InfoWorks ICM subscribers. New database type stores databases directly in cloud with all workgroup capabilities without needing workgroup server access. On-premise master databases (standalone/workgroup) still available for all users. Cloud databases have some differences from on-premise databases in workflow.",
        category: "Cloud",
        takeaway: "You can collaborate on models without maintaining a workgroup server. Useful for remote teams and consultants who need to work on the same model simultaneously."
      },
      {
        id: "2024.0-cloud-portal",
        title: "Cloud Database Management Web Portal",
        description: "New Info360 Model Management web portal for managing cloud databases via File > Master database management > Cloud database management. Portal enables database rename, deletion, restore, backup, and recovery (with appropriate privileges).",
        category: "Cloud"
      },
      {
        id: "2024.0-cloud-simulations",
        title: "Cloud Simulations",
        description: "Simulations from cloud databases run in the cloud. Cloud simulations distributed in parallel with cloud resources selected based on network type and input parameters for optimal performance.",
        category: "Cloud"
      },
      {
        id: "2024.0-open-create-dialog",
        title: "Open/Create Dialog",
        description: "New Open/Create dialog simplifies database type selection process for opening, creating, updating, or getting identifier. After type selection, displays appropriate Open Master Database dialog for selected type.",
        category: "User Interface"
      },
      {
        id: "2024.0-buildings",
        title: "Buildings",
        description: "New Buildings polygon object for InfoWorks networks models rain falling onto building roofs entering drainage system and/or remaining on surface. Can assign SUDS controls (e.g., green roofs) to model impact on storm runoff. Set capacity limit with excess flow options: lost from system or passed to 2D mesh elements (enforcing boundaries as break lines during meshing). Configure single element mesh representation, ground level adjustment, porosity, and roughness. Default theme available for GeoPlan visualization. Results displayed on grid and Building Property Sheet during replay. Requires database update to 2024.0.",
        category: "Modeling"
      },
      {
        id: "2024.0-bank-lines",
        title: "Improvements to Bank Lines Created from Section Ends for Meandering Rivers",
        description: "Improved Create bank lines from section ends when following river reach link shape. Banks now projected from link line providing more natural-looking curves with minimized vertices. Bank distance linearly interpolated from upstream/downstream sections. Projected points perpendicular to river line with beveling points on outer bends for improved shape. Visual inspection still required for physical reality verification.",
        category: "Modeling"
      },
      {
        id: "2024.0-deficit-loss-infiltration",
        title: "2D Deficit and Constant Loss Infiltration Model",
        description: "New DefConLoss infiltration model for Infiltration surfaces (2D) based on HEC-HMS method. Models surface as single soil layer with initial storage subject to evaporative loss. When saturated, infiltration occurs. New properties: Infiltration loss coefficient (infiltration rate when saturated) and Maximum deficit (soil layer water capacity). Initial deficit specified in Initial Condition 2D object using DefConLoss initial deficit field. Requires database update to 2024.0.",
        category: "Modeling"
      },
      {
        id: "2024.0-legacy-database-dialog",
        title: "Legacy Master Database Run Dialog",
        description: "New dialog displayed when running/re-running simulations for non-latest database versions. Warns about engine enhancements only available in latest version requiring database update. Includes 'Notify me of legacy master database runs in future' checkbox for suppression. Database version now included in InfoWorks log file and SWMM report file.",
        category: "User Interface"
      },
      {
        id: "2024.0-odic-file-geodatabase",
        title: "ODIC Import from File Geodatabases",
        description: "64-bit InfoWorks ICM can import networks using new File Geodatabase option in Open Data Import Centre (ODIC). Imports ESRI shapefile (SHP) folders without requiring ArcGIS license (unlike existing Geodatabases option).",
        category: "Data Management"
      },
      {
        id: "2024.0-odec-file-geodatabase",
        title: "ODEC Export to File Geodatabases",
        description: "64-bit InfoWorks ICM can export networks using new File Geodatabase option in Open Data Export Centre (ODEC). Exports network data to new/existing feature class in geodatabase without requiring ArcGIS license (unlike existing Geodatabase option).",
        category: "Data Management"
      },
      {
        id: "2024.0-gpu-fallback",
        title: "Unsupported 2D Modelling Options Check for InfoWorks Networks",
        description: "Changed GPU simulation handling. Previously, unsupported 2D modeling options would cause simulation failure when 'If suitable card is available' selected in 2D Parameters. Now automatically falls back to CPU if unsupported GPU options selected (provided no unsupported CPU options selected). Improves simulation robustness.",
        category: "Performance"
      },
      {
        id: "2024.0-merge-network-changes",
        title: "Merge Changes from Another Network",
        description: "New capability to merge changes from one network into another, copying differences. Useful for branching shared models to explore iterative changes, then merging finalized branch back to parent while preserving parent changes since branch creation. Works across organizations using transportable database model copies. New 'Merge changes from another network' option in network popup menu displays Merge changes into dialog for specifying parameters. Review Network Merge report lists added/modified/renamed/deleted objects and conflicting properties with current/incoming values and selection options. Requires database update to 2024.0.",
        category: "Data Management"
      },
      {
        id: "2024.0-database-management-rename",
        title: "Master Database Settings Renamed",
        description: "File menu option 'Master database settings' renamed to 'Master database management'.",
        category: "General"
      },
      {
        id: "2024.0-swmm-engine-update",
        title: "SWMM Simulation Engine Updated to v5.2.02",
        description: "SWMM network simulation engine updated to SWMM 5.2.02. Databases older than version 2024.0 remain consistent with SWMM 5.1.15. Requires database update to 2024.0.",
        category: "Simulation"
      },
      {
        id: "2024.0-geodatabase-export-32bit",
        title: "Geodatabase Export Restrictions for 64-bit Version",
        description: "Time varying and maximum results export to Geodatabases only available in 32-bit InfoWorks ICM. To Geodatabase option disabled in 64-bit version for 'Export to GIS' and 'Export maxima to GIS' in Results menu. Network export to Geodatabase from Explorer/Network menu also disabled in 64-bit version.",
        category: "Data Management"
      },
      {
        id: "2024.0-dwg-import-64bit",
        title: "AutoCAD DWG File Import",
        description: "AutoCAD DWG file import only supported in 64-bit versions of InfoWorks ICM.",
        category: "Data Management"
      },
      {
        id: "2024.0-help-system",
        title: "Changes to Help System",
        description: "Help delivery changed from single compiled (CHM) file in HTML help viewer to online XML help opened in web browser. Access via Help topics in Help menu or F1 for context-sensitive help. Release Notes (bug fixes for 2024.0) and Known Issues (limitations of 2024.0 release) now included in help documentation.",
        category: "Documentation"
      }
    ]
  },
  {
    id: "2023.2",
    version: "2023.2",
    releaseDate: "2022-10-01",
    features: [
      {
        id: "2023.2-overlapping-roughness-zones",
        title: "Overlapping Roughness Zones with Priority-Based Meshing",
        description: "Priority field for roughness zones enables clip meshing with overlapping zones. Lowest priority value takes precedence in overlapping areas. Mesh triangles assigned roughness based on zone priority, eliminating need for manual geometry editing. Requires priority assignment and unique values per 2D zone.",
        category: "Meshing"
      },
      {
        id: "2023.2-mesh-size-limit-error",
        title: "Mesh Size Limit Error Logging",
        description: "New message in Mesh 2D zones log alerts when mesh data (vertices, edges, triangles, elements) exceeds storage limits based on aggregation and geometry complexity.",
        category: "Meshing"
      },
      {
        id: "2023.2-ground-model-theme",
        title: "Ground Model Theme Editor Enhancements",
        description: "New Value Range section in layer theme editor with Restrict range box for Min/Max elevation specification. Editable Value count in Ranged Themes grid with automatic value calculation based on distribution type.",
        category: "Visualization"
      },
      {
        id: "2023.2-cross-section-ground-update",
        title: "Section Editor Ground Model Elevation Update",
        description: "New Update from Ground Model button in Section Editor samples ground model to update existing cross section line vertex elevations. Updated levels displayed in editor grid and section profile graph.",
        category: "Tools"
      },
      {
        id: "2023.2-autodesk-license-status",
        title: "Simulation Status for Autodesk License Loss",
        description: "Simulation status set to 'incomplete' (not 'completed') when Autodesk license access lost during run. Results remain available until access lost with log message explaining status.",
        category: "Administration"
      },
      {
        id: "2023.2-alert-graph-trace-colors",
        title: "Graph Trace Colors for Alert Definitions",
        description: "New Graph trace property for alert definitions with Comparison operator and <FIXED VALUE> Target type B. Choose trace colors from palette or Windows Colors. Applies to results graphs, ICMLive custom graphs, and action email graphs.",
        category: "Visualization"
      },
      {
        id: "2023.2-noaa-aep",
        title: "Annual Exceedance Probabilities (AEP) for NOAA Storm Generator",
        description: "Annual maximum time series data now displays annual exceedance probabilities (AEP) on Event page. Corrects previous incorrect display as annual recurrence intervals (ARI).",
        category: "Hydrology"
      },
      {
        id: "2023.2-cnswmm-runoff-model",
        title: "CNSWMM Runoff Volume Model for InfoWorks Subcatchments",
        description: "New CNSWMM runoff volume model based on EPA SWMM Curve Number infiltration. Designed for multi-storm simulations with comparable Curve number model results. Requires Curve number and new Drying time property. CNSWMM Runoff volume type option for runoff surfaces with land use associations.",
        category: "Hydrology"
      },
      {
        id: "2023.2-swmm5-infiltration-export-import",
        title: "SWMM5 Infiltration Data Export/Import Enhancement",
        description: "Drying time and Curve number exported from InfoWorks subcatchments to SWMM5 [INFILTRATION] section DryTime/CurveNo fields. SWMM5 DryTime imported to Drying time field (new equivalent in ICM). CurveNo import to Curve number maintained.",
        category: "Integration"
      },
      {
        id: "2023.2-scs-runoff-models",
        title: "SCS Runoff Models for SWMM Subcatchments",
        description: "SCS_curvilinear and SCS_triangular runoff models using Natural Resources Conservation Service unit hydrographs. New Runoff model type field with SCS runoff section: Time of concentration, Hydraulic length, Shape factor, Initial abstraction type (Depth/Factor). Automatically sets Curve_number infiltration type. Default remains SWMM model.",
        category: "Hydrology"
      },
      {
        id: "2023.2-xpx-scs-import",
        title: "SCS Hydrology Data Import from XPSWMM/XPStorm",
        description: "Import SCS runoff routing data from XPX files to SWMM subcatchments: Runoff model type, Time of concentration, Shape factor, Initial abstraction type/values, Curve number fields.",
        category: "Integration"
      },
      {
        id: "2023.2-swmm5-initial-abstraction-export",
        title: "Initial Abstraction Export to SWMM5 Files",
        description: "Initial abstraction exported from SWMM subcatchments to [Innovyze_UnitHydrograph] section in SWMM5 text files.",
        category: "Integration"
      },
      {
        id: "2023.2-xpx-scs-infoworks-import",
        title: "SCS Subcatchment Import Without Polygon Requirement",
        description: "Removed polygon attachment restriction for XPX import to InfoWorks networks. SCS subcatchment data now imported regardless of polygon association, matching XPSWMM/XPStorm behavior.",
        category: "Integration"
      },
      {
        id: "2023.2-xpx-roughness-zone-import",
        title: "Roughness Zone Import from XPSWMM/XPStorm",
        description: "XPX data applicable to ICM roughness zones now imported as roughness zones (not porous polygons) for InfoWorks and SWMM networks.",
        category: "Integration"
      },
      {
        id: "2023.2-xpx-roughness-id-format",
        title: "Roughness Zone ID Format Change for XPX Import",
        description: "Roughness zone ID format changed from <Layer name>_<Layer ID>_<Polyline ID> to <Landuse ID>_<Count>. Imported from Landuse ID and Count XPX fields instead of Layer Name/Layer ID/Polygon ID.",
        category: "Integration"
      },
      {
        id: "2023.2-xpx-mannings-roughness",
        title: "Manning's Roughness Import from XPSWMM/XPStorm",
        description: "Constant Manning's roughness from XPX files imported to Roughness (Manning's n) property for roughness zones in InfoWorks/SWMM networks.",
        category: "Integration"
      },
      {
        id: "2023.2-rtc-precision-increase",
        title: "RTC Regulator Precision Enhancement",
        description: "Decimal places for RTC Regulator Rate of change (Positive/Negative) and Range Values (Maximum/Minimum) increased from three to eight for more precise flow, depth, and level specifications.",
        category: "Modeling"
      }
    ]
  },
  {
    id: "2023.1",
    version: "2023.1",
    releaseDate: "2022-07-01",
    features: [
      {
        id: "2023.1-database-version-support",
        title: "Multi-Version Database Support (2023.0+)",
        description: "Use multiple database versions (2023.0+) with latest software. Access features based on database version with non-database features always available. Database Version Change dialog with update implications and display preferences.",
        category: "Administration"
      },
      {
        id: "2023.1-database-update-current",
        title: "Update Current Master Database Option",
        description: "New File→Database updates→Update current master database to latest version menu option. Automatically updates selected workgroup/standalone master database without Open Master Database dialog.",
        category: "Administration"
      },
      {
        id: "2023.1-database-version-selection",
        title: "Version Selection for Database Updates",
        description: "Choose target database version when updating master or transportable databases via Update to dropdown. Update Transportable Database dialog with Browse and version selection. Minimum version: 2023.0.",
        category: "Administration"
      },
      {
        id: "2023.1-database-version-display",
        title: "Database Version Number Display",
        description: "Version number displayed in Explorer window title and tree view for master databases. Transportable database versions shown in tree view (current/read-only) and window title (non-current).",
        category: "Administration"
      },
      {
        id: "2023.1-database-version-creation",
        title: "Version Selection for New Databases",
        description: "Choose database version when creating new master or transportable databases via Database version dropdown. Enables collaboration with users on different software versions. Minimum version: 2023.0.",
        category: "Administration"
      },
      {
        id: "2023.1-culvert-codes",
        title: "Culvert Inlet/Outlet Codes with FHWA Standards",
        description: "New Culvert code field based on FHWA Hydraulic Design of Highway Culverts (3rd Edition). Auto-populates K, M, c, Y, and Inlet headloss coefficient (Ki) with #D flag. Applies to culvert inlets and outlets (when Reverse flow model is INLET).",
        category: "Modeling"
      },
      {
        id: "2023.1-culvert-conduit-type",
        title: "Culvert Type Conduit for Simplified Modeling",
        description: "New Culvert option in Conduit type field combines inlet/outlet losses in single link (vs. previous 3-link method). Displays culvert inlet and outlet loss properties in conduit. Backward compatible with 3-link method. GeoPlan sub-theme support.",
        category: "Modeling"
      },
      {
        id: "2023.1-culvert-import-export",
        title: "Culvert Type Conduit SWMM5 Import/Export",
        description: "Import SWMM5 conduits with Culvert code ≠0 as Culvert type with code assignment. Headloss coefficients imported to Inlet/Outlet properties. Export Culvert type conduits to SWMM5/SWMM networks with codes and coefficients.",
        category: "Integration"
      },
      {
        id: "2023.1-noaa-temporal-distribution",
        title: "NOAA Rainfall Generator Temporal Distribution Methods",
        description: "Three new temporal distribution methods: Huff Distribution, Bulletin 75, Alternating Block. Catchment area selection for Huff/Bulletin 75. Time series interval and time to peak specification for Alternating Block.",
        category: "Hydrology"
      },
      {
        id: "2023.1-subcatchment-runoff-limit",
        title: "Subcatchment Runoff Limit with Exceedance Handling",
        description: "New Limit drain to capacity option limits runoff to Drains to object. Capacity limit specification with Exceedance flow type (Lost or 2D mesh surcharge). Models roof gutters and overland spill. Requires node within 2D mesh element for 2D surcharge.",
        category: "Modeling"
      },
      {
        id: "2023.1-subcatchment-exceedance-results",
        title: "Subcatchment Exceedance Flow and Volume Results",
        description: "New Exceedance flow and Exceedance volume results for subcatchments with Limit drain to capacity enabled.",
        category: "Results"
      },
      {
        id: "2023.1-2d-volume-error",
        title: "2D Zone Volume Error Result",
        description: "New Volume error result in 2D Zone Mesh Element Properties dialog showing accumulated water volume error at mesh element during simulation.",
        category: "Results"
      },
      {
        id: "2023.1-2d-flow-direction-precision",
        title: "Enhanced 2D Flow Direction Result Precision",
        description: "2D flow direction results in radians increased from 1 to 3 decimal places. Applies to ANGLE2D, MAXANGLE2D, MINANGLE2D, MAXHAZANGLE2D, MAXDEPTHANGLE2D, MAXVELDEPTHANGLE2D.",
        category: "Results"
      },
      {
        id: "2023.1-2d-zone-resample-validation",
        title: "Automatic 2D Zone Validation During Resample",
        description: "Mesh elevation resample process auto-validates 2D Zone checking for changes (Mesh Zone/Mesh Level Zone boundary edits, renames, deletions) that could cause failure. Displays validation messages in Output window.",
        category: "Meshing"
      },
      {
        id: "2023.1-mesh-level-zone-adjustments",
        title: "New Mesh Level Zone Ground Level Adjustment Methods",
        description: "Four new Type field options: Level (specified fixed), Rel. to highest (relative to max), Rel. to lowest (relative to min), Raise or lower (uniform adjustment). Level/Raise by fields. First three produce flat surfaces. Existing Specify/Adjust options renamed to Specify (Specified boundary elevations)/Adjust (Boundary ground model adjusted).",
        category: "Meshing"
      },
      {
        id: "2023.1-clip-meshing-mta",
        title: "Maximum Triangle Area (MTA) Correction in Clip Meshing",
        description: "Corrected clip meshing to include Mesh Zone MTAs larger than 2D Zone MTA (previously disregarded). All Mesh Zone MTAs (larger and smaller) now included in mesh generation.",
        category: "Meshing"
      },
      {
        id: "2023.1-clip-meshing-performance",
        title: "Clip Meshing Performance Improvements",
        description: "Triangulation refinement 10x faster for primary triangulation (50% total time reduction in 1.2M triangle test). Polygon geometry processing 40% faster (42K porous polygons test). Topographic sampling 2-3x faster. Bank intersection processing 47% faster (river reach test).",
        category: "Performance"
      },
      {
        id: "2023.1-clip-meshing-validation",
        title: "Stricter Zone Overlap Validation in Clip Meshing",
        description: "Stricter validation for overlapping zones (Mesh/Mesh Level/Roughness/Infiltration/Turbulence/Permeable). No overlap allowed (consistent with Classic method). Zone intersections validated at process start with failures reported in mesh log. Previously meshed models may now fail requiring geometry correction.",
        category: "Meshing"
      },
      {
        id: "2023.1-desbordes-washoff",
        title: "Desbordes Model Surface Washoff Calculation Restriction",
        description: "Water quality simulations use Desbordes Model for surface washoff only when selected as runoff routing model. Removed Native Washoff Routing option from QM Parameters dialog. Automatic runoff routing model usage for washoff calculations.",
        category: "Water Quality"
      },
      {
        id: "2023.1-swmm-mesh-log",
        title: "Mesh Log for SWMM 2D Zones",
        description: "Mesh generation log for SWMM 2D Zones includes network object types, vertex/triangle/element counts, terrain-sensitive meshing status, maximum height variation. Accessible via Show log in Manage Mesh Results dialog and Mesh summary field.",
        category: "SWMM"
      },
      {
        id: "2023.1-4k-screen-support",
        title: "4K High Resolution Screen Support",
        description: "Enhanced display on high resolution 4K screens.",
        category: "Usability"
      },
      {
        id: "2023.1-deprecated-imports",
        title: "Deprecated Import Options Removal",
        description: "Removed: HydroWorks DSD/SSD import, InfoWorks RS CSV import, InfoWorks CS/SD migration file import, gridded ground model IGM import, ISIS DAT river section/spill import. External Data Server (EDS) deprecated with Manage external data sources removed.",
        category: "Administration"
      },
      {
        id: "2023.1-tsdb-minute-granularity",
        title: "Minute Granularity for Spatial TSDB Files",
        description: "Observed and forecast ASCII/Binary Grid format files with minute granularity support in spatial TSDB. Requires TSD license option.",
        category: "Data Management"
      }
    ]
  },
  {
    id: "2023.0",
    version: "2023.0",
    releaseDate: "2022-03-01",
    features: [
      {
        id: "2023.0-autodesk-licenses",
        title: "Autodesk Licences for InfoWorks ICM",
        description: "New Autodesk licence options (Standard/Ultimate) for InfoWorks ICM modeling capabilities with minor restrictions. Autodesk Sign in window displayed at first start for licence verification. Replaces previous licensing system.",
        category: "Administration"
      },
      {
        id: "2023.0-swmm-node-split",
        title: "Node Insertion with Link Splitting in SWMM Networks",
        description: "Split box enabled in Create New Node dialog when inserting node into existing SWMM link (GeoPlan/Long Section). Creates two links connected to new node. Dropdown for multi-link intersections and flag selection. New link named with '!' appended. Automatic elevation calculation or #D flag assignment.",
        category: "SWMM"
      },
      {
        id: "2023.0-swmm-terrain-sensitive-meshing",
        title: "Terrain-Sensitive Meshing for SWMM 2D Zones",
        description: "Terrain-sensitive meshing now available for SWMM 2D zones. New Terrain-sensitive meshing checkbox and Maximum height variation field. Increases mesh resolution in high-variation areas without affecting flat areas.",
        category: "Meshing"
      },
      {
        id: "2023.0-infoworks-mesh-summary-terrain",
        title: "Terrain-Sensitive Meshing Indication in InfoWorks Mesh Summary",
        description: "Mesh log and mesh summary for InfoWorks 2D zones now indicates terrain-sensitive meshing application status and maximum height variation used. Accessible via Mesh summary field button and Manage Mesh Results Show log.",
        category: "Meshing"
      },
      {
        id: "2023.0-clip-meshing-attribution",
        title: "Consistent Zone Attribution for Clip Meshing",
        description: "Consistent vertex elevation attribution from Mesh Zones/Mesh Level Zones for shared vertices in clip meshing. Zone selection based on creation order with Mesh Level Zone preference over Mesh Zone. Simplified mesh log with single warning per zone pair and ordered vertex list (no duplicates).",
        category: "Meshing"
      },
      {
        id: "2023.0-hec-ras-import-errors",
        title: "Enhanced HEC-RAS Import Error Messages",
        description: "HEC-RAS data import error messages now include line number and associated text from prj/g01 files for error diagnosis.",
        category: "Integration"
      },
      {
        id: "2023.0-xpswmm-evaporation-import",
        title: "XPSWMM/XPStorm Evaporation Data Import to SWMM Climatology",
        description: "Import evaporation data from XPSWMM/XPStorm XPX files to SWMM Climatology database items.",
        category: "Integration"
      },
      {
        id: "2023.0-resizable-additional-info",
        title: "Resizable Additional Information Window",
        description: "Additional Information window (Help→About InfoWorks...→Additional Information) now resizable.",
        category: "Usability"
      }
    ]
  },
  {
    id: "2021.8",
    version: "2021.8",
    releaseDate: "2021-10-01",
    features: [
      {
        id: "2021.8-swmm-2d-boundary",
        title: "2D Boundary Objects for SWMM Networks",
        description: "2D Boundary objects define alternative boundary line conditions along 2D Zone boundary sections. Overrides 2D Zone boundary type where lines coincide. All boundary types available (Vertical wall, Critical, Supercritical, Dry, Normal) plus additional types for boundary lines. Inflow/Level hydrographs via events. Level & Head/discharge type uses head unit flow association.",
        category: "SWMM"
      },
      {
        id: "2021.8-swmm-head-unit-flow",
        title: "Head Unit Flow Objects for SWMM Networks",
        description: "New Head unit flow object for SWMM networks. Associates with 2D Boundary objects (Level & Head/discharge type). Level event profile provides water depth at boundary. Head calculated from depth difference. Unit flow or flow per unit length determined by head unit flow table.",
        category: "SWMM"
      },
      {
        id: "2021.8-xpx-2d-boundary-roughness-import",
        title: "2D Boundary and Roughness Zone Import from XPSWMM/XPStorm",
        description: "Import 2D boundary and Roughness zone objects from XPSWMM/XPStorm xpx files to InfoWorks or SWMM networks.",
        category: "Integration"
      },
      {
        id: "2021.8-xpx-ic-zone-import",
        title: "InfoWorks IC Zone - Hydraulic (2D) Import from XPSWMM/XPStorm",
        description: "Import IC zone - hydraulic (2D) objects from XPSWMM/XPStorm xpx files to InfoWorks networks.",
        category: "Integration"
      },
      {
        id: "2021.8-xpx-events-import",
        title: "Inflow and Level Event Import from XPSWMM/XPStorm",
        description: "Import data from XPSWMM/XPStorm xpx files to Inflow and Level events for InfoWorks and SWMM networks.",
        category: "Integration"
      },
      {
        id: "2021.8-asset-property-sheets",
        title: "Asset Network Object Property Sheet Display Change",
        description: "Asset network object property sheets now display by default in Property Editor in Object Properties Window (previously tabbed modal sheet). Configurable via Use property editor for asset network objects option in General Page of Options dialog.",
        category: "Usability"
      },
      {
        id: "2021.8-help-menu-reorder",
        title: "Help Menu Option Reordering",
        description: "Help option moved to first position in Help menu (previously Desktop analytics was first).",
        category: "Usability"
      },
      {
        id: "2021.8-swmm-job-progress",
        title: "Job Progress Details for SWMM 2D Simulations",
        description: "Job progress window displays details for jobs with SWMM 2D network objects: Minimum 2D timestep, 2D Zone ID, Element ID, Wet area, Inundated area, Max wet/inundated area, 2D volume, volume error, rainfall, average inflow/outflow. Timestep details shown for SWMM networks.",
        category: "Results"
      },
      {
        id: "2021.8-prn-file-changes",
        title: "PRN File Format Updates",
        description: "PRN results text report Start of run date/time now in ISO 8601 format with UTC time zone offset (simulations still use local time). Licence number removed from report title and header.",
        category: "Results"
      },
      {
        id: "2021.8-icm-exchange-tcp",
        title: "TCP/IP Connection for Local Agent via ICM Exchange",
        description: "TCP/IP connection now available for connecting to local agent using ICM Exchange.",
        category: "Development"
      },
      {
        id: "2021.8-workgroup-authentication",
        title: "Workgroup Data Server Authentication Requirement",
        description: "Workgroup data server now requires user authentication by default.",
        category: "Administration"
      }
    ]
  },
  {
    id: "2021.7",
    version: "2021.7",
    releaseDate: "2021-09-01",
    features: [
      {
        id: "2021.7-noaa-rainfall-generator",
        title: "NOAA ATLAS 14 Rainfall Generator",
        description: "New NOAA ATLAS 14 Rainfall Generator downloads data from NOAA's Precipitation Frequency Data Server (PFDS) for US locations. Generate precipitation frequency estimates with NOAA ATLAS 14 or NCRS Regional temporal distribution systems. Specify average recurrence intervals and durations for design rainfall events.",
        category: "Hydrology"
      },
      {
        id: "2021.7-thales-license-expiry",
        title: "Expiry Warning for Thales Licences",
        description: "Warning message displayed by default when Thales licence within one month of expiry (daily when within one week). Configurable via Remind me later option on warning dialog or Licence expiry date reminder option in General Page of Options Dialog.",
        category: "Administration"
      },
      {
        id: "2021.7-about-box-update",
        title: "InfoWorks About Box Redesign",
        description: "Updated About box displays licence agreement information, software version number, and licence name from dongle/server. Previous details (licence number, OS version, master database name/location) moved to new Additional Information window accessible via Additional Information button.",
        category: "Usability"
      },
      {
        id: "2021.7-xpx-scs-runoff-import",
        title: "SCS Runoff Data Import from XPSWMM/XPStorm to InfoWorks",
        description: "Import subcatchments using SCS Hydrology routing method from XPSWMM/XPStorm xpx files to InfoWorks networks as Subcatchment, Runoff surface, and Land use objects.",
        category: "Integration"
      }
    ]
  },
  {
    id: "2021.6",
    version: "2021.6",
    releaseDate: "2021-08-01",
    features: [
      {
        id: "2021.6-results-selectors",
        title: "Results Selectors for InfoWorks Networks",
        description: "New Results selector database item limits generated results to selected attributes. Choose result types (Hydraulic, Water quality, 2D), classes (rivers, subcatchments), attribute types (All, Summary, Time series, Gauge), and individual attributes. Schedule Hydraulic Run View includes results selector dropbox (becomes read-only after run completion).",
        category: "Results",
        takeaway: "Generate results faster by only computing what you need. Useful when you only care about peak flows or specific locations, not the entire network — saves disk and run time."
      },
      {
        id: "2021.6-gis-export-fix",
        title: "Result Export to GIS for Return Periods and Durations",
        description: "Fixed export of Return period/Duration values less than 1 to GIS files (previously exported as NULL). Now correctly exported as floating point integers for time varying and maximum results.",
        category: "Results"
      },
      {
        id: "2021.6-mesh-validation-performance",
        title: "Quicker Validation for Mesh Zones",
        description: "Significantly reduced validation time for networks containing thousands of mesh zones.",
        category: "Performance"
      },
      {
        id: "2021.6-2d-preprocessing-performance",
        title: "Quicker Pre-processing for 2D Simulations",
        description: "Pre-processing times for 2D simulations with large numbers of elements reduced by more than 90%.",
        category: "Performance"
      },
      {
        id: "2021.6-culvert-inlets",
        title: "Culvert Inlet Behavior Improvements",
        description: "Improved culvert inlet behavior accounts for base flow presence in barrel conduit when using Equation B. Eliminates oscillations that prevented initialization from finding steady state.",
        category: "Modeling"
      },
      {
        id: "2021.6-culvert-outlets",
        title: "Culvert Outlet Behavior Improvements",
        description: "Improved culvert outlet behavior for supercritical cases. Updated implementation of free flow/headloss (drowned) condition switching. Free flow condition now applies if downstream depth plus headloss below lower of critical (yc) or normal (yn) depth. Behaves as free boundary between link end and node. Updated status values: 8 for subcritical free discharging, 32 for free flow limited to pipe full value.",
        category: "Modeling"
      },
      {
        id: "2021.6-chicago-rainfall",
        title: "Chicago Design Rainfall Generator",
        description: "New Chicago design rainfall generator based on Keifer and Chu (1957) method for determining synthetic hyetograph.",
        category: "Hydrology"
      },
      {
        id: "2021.6-malaysia-hp1-rainfall",
        title: "Malaysia HP1 (2015) Rainfall Generator Updates",
        description: "Minimum Duration set to 5 minutes, maximum 4320 minutes (72 hours/3 days). Warning message displayed if specified duration(s) fall outside permitted range.",
        category: "Hydrology"
      },
      {
        id: "2021.6-desktop-analytics",
        title: "Desktop Analytics Option",
        description: "New Desktop analytics option in Help menu. Dialog allows opt in (default) or out of Innovyze data collection about InfoWorks ICM usage. Opt-in data used to improve features, performance, and quality.",
        category: "Usability"
      },
      {
        id: "2021.6-infoworks-gpu-default",
        title: "Default GPU Card Option for InfoWorks 2D Simulations",
        description: "Default GPU card usage changed from Never to If suitable card is available in GPU tab of 2D Parameters Dialog. Option order updated with default listed first. Error message displayed in simulation log if suitable GPU card not found. Requires latest NVIDIA driver. GPU status displayed in Job Progress Window (Not in use/Active).",
        category: "Performance"
      },
      {
        id: "2021.6-swmm-gpu",
        title: "GPU Cards for SWMM 2D Simulations",
        description: "GPU card support for SWMM 2D simulation performance improvement. Three options: Never, If suitable card is available (default), Always (set in GPU tab of 2D Parameters Dialog). Error message if suitable card not found. Requires latest NVIDIA driver. GPU status displayed in Job Progress Window (Not in use/Active).",
        category: "Performance"
      },
      {
        id: "2021.6-swmm-boundary-types",
        title: "Boundary Types for SWMM 2D Zones",
        description: "New Boundary type property for SWMM 2D Zones. Choose boundary condition: Vertical wall, Critical condition, Supercritical condition, Dry, or Normal condition. Porous Wall or Porous Polygon collinear with 2D Zone boundary overrides zone boundary condition along coincident portion.",
        category: "SWMM"
      },
      {
        id: "2021.6-swmm-outfall-nodes",
        title: "SWMM Outfall Node Type Enhancement",
        description: "Outfall nodes no longer restricted as end nodes. Can be located upstream of another node and have multiple links connected. Network validation no longer fails if outfall node connected to multiple links.",
        category: "SWMM"
      },
      {
        id: "2021.6-swmm-roughness-definitions",
        title: "Roughness Definitions for SWMM Networks",
        description: "New Roughness definition non-visual polygon objects define roughness as depth function in 2D Zone mesh elements. Manning's n changes dynamically during simulation per roughness definition function. Up to three roughness values and two depth thresholds. Multiple roughness values create smoothed step function with cubic spline transitions. New Roughness definition field in 2D Zones and Roughness Zones properties. Legacy Roughness (Manning's n) field retained for backwards compatibility.",
        category: "SWMM"
      },
      {
        id: "2021.6-swmm-water-quality-stats",
        title: "Water Quality Results for SWMM Statistics Templates",
        description: "Water quality results now included in SWMM Statistics templates. Editable Attribute field when list water quality attributes checked allows specifying pollutant name. Statistical report displays specified water quality attributes in pollutant-specified units.",
        category: "Results"
      },
      {
        id: "2021.6-xpx-links-import",
        title: "Importing Links from XPSWMM/XPStorm to InfoWorks Networks",
        description: "Updated link import from XPSWMM/XPStorm XPX files. Conduit/channel US invert level now imports ZP1 value only (previously ZP1 minus Z(US node)). DS invert level imports ZP2 value only (previously ZP2 minus Z(DS node)). Orifice/sluice Invert level imports ZP value only (previously ZP minus Z(US node)). User-defined control Initial level now imports Z(US node) value (previously 0).",
        category: "Integration"
      },
      {
        id: "2021.6-xprafts-subcatchment-import",
        title: "Importing Subcatchment Data from XPRAFTS",
        description: "Choose to combine or split XPRAFTS First and Second Subcatchments on import. Updated Import XPRAFTS dialog with Combine 1st and 2nd subcatchments into single polygon (default) or Split 1st and 2nd subcatchments to separate polygons options. Combined subcatchments require matching polygon geometry and neither runoff surface type set to Impervious=100 or Pervious=0. Combined import uses First Subcatchment properties, creates two runoff surfaces.",
        category: "Integration"
      },
      {
        id: "2021.6-assimilation-deprecation",
        title: "Assimilation Deprecation",
        description: "Assimilation database item deprecated to accommodate expanding functionality. Existing Assimilation items remain visible in Explorer Window but no new items can be added or used in runs.",
        category: "Administration"
      }
    ]
  },
  {
    id: "2021.5",
    version: "2021.5",
    releaseDate: "2021-06-01",
    features: [
      {
        id: "2021.5-12d-tin-ground",
        title: "12D TIN Ground Model Import Enhancements",
        description: "TIN ground models can now be imported from 12DA files with USC-2 and BOM text encoding in addition to original encoding support.",
        category: "Data Management"
      },
      {
        id: "2021.5-recycle-bin-performance",
        title: "Recycle Bin Performance Improvement",
        description: "Replaced item counting with asterisk (*) display when recycle bin contains deleted items. Eliminates performance impact from counting operations, particularly with large database item hierarchies.",
        category: "Performance"
      },
      {
        id: "2021.5-swmm-conduit-default-flags",
        title: "Default Flags for SWMM Conduit Elevations",
        description: "Default data flag (#D) now available for SWMM conduit Upstream elevation and Downstream elevation properties. When set, elevations automatically populated from connected node Invert elevation values.",
        category: "SWMM"
      },
      {
        id: "2021.5-swmm-spatially-varying-rainfall",
        title: "Spatially Varying Rainfall for SWMM 2D Mesh Elements",
        description: "Apply spatially varying rainfall and evaporation to 2D mesh elements in SWMM networks. Four new 2D zone properties: Apply rainfall etc directly to mesh elements checkbox, Apply rainfall etc field (entire mesh or outside subcatchment boundary), Rainfall profile field, and Rainfall percentage field for depth specification.",
        category: "SWMM"
      },
      {
        id: "2021.5-swmm-porous-walls",
        title: "Porous Walls for SWMM Networks",
        description: "New Porous Wall line objects represent walls with specified porosity and height. Included in mesh generation process when creating 2D mesh for SWMM networks.",
        category: "SWMM"
      },
      {
        id: "2021.5-xpx-infoworks-import-extension",
        title: "Extended XPSWMM/XPStorm Import to InfoWorks Networks",
        description: "Expanded InfoWorks object types for XPX file import: Subcatchment, Runoff surface, Land use, Build-up/washoff land use, RTK hydrograph subcatchment objects, Orifice, Sluice, Flap valve, User-defined Control link objects, and 2D objects (Polygon, Porous polygon, Mesh zone, Mesh level zone, 2D zone).",
        category: "Integration"
      },
      {
        id: "2021.5-3d-zone-rendering-fix",
        title: "2D Zone Rendering in 3D Network Window",
        description: "Fixed smooth transition rendering between mesh level zones with and without elevation factors in 3D Network Window when Smoothed option selected.",
        category: "Visualization"
      },
      {
        id: "2021.5-swmm-pollutant-units",
        title: "Pollutant Units Displayed for SWMM Results",
        description: "Pollutant modeling units now included in SWMM simulation results grid windows and property sheets (links, nodes, subcatchments). New units added: PCC (Pollutant count/l) and PCU (Pollutant ug/l) in addition to PC (Pollutant mg/l). Units displayed in grid and graph views.",
        category: "Results"
      },
      {
        id: "2021.5-swmm-water-quality-results",
        title: "Water Quality Results Display for SWMM Networks",
        description: "Water quality pollutant results now displayed by default in groups of time-varying and maxima results in simulation property sheets (links, subcatchments, nodes). Grid windows show time-varying and maxima water quality results adjacent for each pollutant. Customizable layout in results property sheets.",
        category: "Results"
      },
      {
        id: "2021.5-xpx-swmm-2d-import",
        title: "Importing 2D Objects from XPSWMM/XPStorm to SWMM",
        description: "XPSWMM/XPStorm 2D polygon data (xpx format) with Default Area Type set to 'Inactive' now imports as 2D Zone object in SWMM networks.",
        category: "Integration"
      }
    ]
  },
  {
    id: "2021.4",
    version: "2021.4",
    releaseDate: "2021-05-01",
    features: [
      {
        id: "2021.4-roughness-definitions-infoworks",
        title: "Roughness Definitions for InfoWorks Networks",
        description: "Non-visual polygon objects define roughness as depth function in 2D Zone mesh elements. Manning's n changes dynamically during simulation. Up to three roughness values and two depth thresholds. Multiple roughness values create smoothed step function with cubic spline transitions. New Roughness definition field in 2D Zones and Roughness Zones properties. Legacy Roughness (Manning's n) field retained for backwards compatibility.",
        category: "Modeling"
      },
      {
        id: "2021.4-finite-volume-solver",
        title: "Finite Volume Solution Model for InfoWorks Conduits",
        description: "New Finite Volume solution model option for InfoWorks conduits models complex trans-critical flow scenarios, resolving hydraulic jumps within conduits. Prototype solver - results should be verified before engineering use. Set Solution model to FiniteVolume in conduit properties to use.",
        category: "Modeling"
      },
      {
        id: "2021.4-malaysia-hp1-2015",
        title: "Malaysia HP1 2015 Rainfall Design",
        description: "New Malaysia Rainfall HP1 2015 design option based on Hydrological Procedure No 1 (Revised and Updated 2015) from Malaysia Department of Irrigation and Drainage. New fields: ARF (areal reduction factor) and Climate change factor. Area specifies catchment size. Extended ARI options (0.16, 0.25, 200). Updated Locations for five rainfall regions determining temporal patterns. IDF polynomial equation coefficients required.",
        category: "Hydrology"
      },
      {
        id: "2021.4-hydx-importer",
        title: "HYDX Importer Improvements",
        description: "XPRAFTS node type 134 now imports as Manhole when connected to network (previously Break type). Unconnected type 134 nodes still import as Break. Node Ground level now set to upstream/downstream channel link invert value plus highest depth of channel profile.",
        category: "Integration"
      },
      {
        id: "2021.4-xpx-infoworks-import",
        title: "Importing XPSWMM/XPStorm Data to InfoWorks Networks",
        description: "Network data from XPSWMM/XPStorm xpx files can now be imported into InfoWorks networks.",
        category: "Integration"
      },
      {
        id: "2021.4-swmm-flooding-coefficient",
        title: "2D Node Flooding Discharge Coefficient for SWMM",
        description: "New Flooding discharge coefficient property for SWMM nodes specifies discharge coefficient for orifice flow equations calculating flooding at 2D nodes. Default coefficient: 0.5 if no value specified.",
        category: "SWMM"
      },
      {
        id: "2021.4-xpx-swmm-2d-import",
        title: "Importing 2D Objects from XPSWMM/XPStorm to SWMM",
        description: "Import 2D objects from XPSWMM/XPStorm xpx format files to polygon objects in SWMM networks.",
        category: "Integration"
      },
      {
        id: "2021.4-grid-sum-average",
        title: "Sum and Average Display in Grid Windows",
        description: "Display sum and average values of selected numeric network object properties or results (area, flood volume, etc.) in status bar. Activated via Autosum option from Grid menu or Modelling Grid Windows toolbar when relevant cells selected in grid window.",
        category: "Usability"
      },
      {
        id: "2021.4-swmm-roughness-zones",
        title: "Roughness Zones for SWMM Networks",
        description: "Roughness Zones can now be added to SWMM networks to divide 2D Zones into regions of different roughness. Automatically included in mesh generation process when creating 2D mesh.",
        category: "SWMM"
      },
      {
        id: "2021.4-swmm-mesh-level-zones",
        title: "Mesh Level Zones for SWMM Networks",
        description: "Mesh Level Zones divide SWMM 2D Zones into regions where mesh element elevations are modified based on ground model elevations or user-defined values. Provides detailed representation of structures (roads, embankments). Included in mesh generation process.",
        category: "SWMM"
      }
    ]
  },
  {
    id: "2021.3",
    version: "2021.3",
    releaseDate: "2021-03-01",
    features: [
      {
        id: "2021.3-feh2013-multiple-timesteps",
        title: "Multiple Timestep Intervals for FEH2013 Rainfall Generator",
        description: "FEH2013 design rainfall generator now allows multiple timestep intervals specified in seconds or percentage (%). Each timestep separated by comma with corresponding duration. Resulting rainfall time series shows event data entries for each duration with specified timestep spacing. TSD functionality requires TSD licence option.",
        category: "Hydrology"
      },
      {
        id: "2021.3-minute-granularity-tsdb",
        title: "Minute Granularity for Spatial TSDB Files",
        description: "Observed and forecast ASCII and Binary Grid format files with minute granularity can now be included in spatial TSDB.",
        category: "Data Management"
      },
      {
        id: "2021.3-hydx-import-improvements",
        title: "HYDX Data Import Improvements",
        description: "Compartment nodes from CMP_IDE fields in Knooppunt.csv now import as storage nodes. Muilprofiel conduit shape (MVR) now imports as symmetric user-defined shape (previously asymmetric). Updated pump import logic: PMP_AN1/PMP_AF1 values import as Switch on/off levels when PMP_AN2/PMP_AF2 absent (previously imported as vortex user-defined control when zero).",
        category: "Integration"
      },
      {
        id: "2021.3-swmm-2d-modelling",
        title: "2D Modelling for SWMM Networks",
        description: "2D Simulations now available for SWMM networks providing detailed flood analysis. Automatic 2D simulation for networks containing 2D Zones. 2D Zones define areas for detailed analysis. 2D Mesh Zones divide zones into different mesh resolutions. Porous polygons represent enclosed walls with porosity/height. New Meshing option in Model menu with Mesh 2D zones dialog. Load mesh job results option for reviewing mesh logs. GeoPlan Elements Page controls 2D element visual effects. 2D nodes model flood water exchange between collection system and 2D meshed area. New 2D parameters button in SWMM Schedule Hydraulic Run View. Results displayable as GeoPlan themes, Time Varying Results Grids, Graph Views, Long Section Window.",
        category: "SWMM"
      },
      {
        id: "2021.3-1d-total-head-results",
        title: "Total Head Results for 1D Network Result Point Objects",
        description: "Two new results added for 1D network result point objects: Total head and Maximum Total head.",
        category: "Results"
      },
      {
        id: "2021.3-2d-permeable-zone-area",
        title: "Summary Area Result for 2D Permeable Zones",
        description: "New summary Area in 2D Zone result available for 2D Permeable Zones in InfoWorks networks. Addresses difference between generated result areas and actual polygon-enclosed areas.",
        category: "Results"
      },
      {
        id: "2021.3-green-ampt-smd-reset",
        title: "Green-Ampt Soil Moisture Deficit Reset for 2D Simulations",
        description: "During 2D simulations with Green-Ampt infiltration surfaces in InfoWorks networks, simulation engine now resets soil moisture deficit (SMD) result for 2D zone to 0 if SMD becomes negative during simulation.",
        category: "Modeling"
      },
      {
        id: "2021.3-swmm-area-averaged-rainfall",
        title: "Area-Averaged Subcatchment Rainfall for SWMM Networks",
        description: "New Use area-averaged rain option for SWMM subcatchments. When using spatial rainfall (events or TSDB), subcatchments matched by default to rainfall polygon containing centroid. For large subcatchments and/or high resolution (radar) rainfall overlapping multiple polygons, area-averaged option ensures representative rainfall simulation.",
        category: "SWMM"
      },
      {
        id: "2021.3-swmm-engine-update",
        title: "SWMM Engine Update to v5.1.015",
        description: "SWMM5 components in InfoWorks simulation engine updated to SWMM 5.1.015.",
        category: "Development"
      }
    ]
  },
  {
    id: "2021.2",
    version: "2021.2",
    releaseDate: "2021-02-01",
    features: [
      {
        id: "2021.2-feh2013-custom-timesteps",
        title: "FEH2013 Rainfall Generator Custom Timesteps",
        description: "FEH2013 design rainfall generator now allows custom timesteps in seconds (not just default 60 seconds). New Timestep field controls event data entry spacing in resulting rainfall time series. TSD functionality requires TSD licence option.",
        category: "Hydrology"
      },
      {
        id: "2021.2-canadian-grib2-radar",
        title: "Canadian GRIB 2 Format Radar Data Support",
        description: "Forecast radar data in GRIB2 format from Canadian Meteorological Centre (CMC) now supported. Use Grib 1 (forecast) option in Data file format field in Spatial Time Series Database Configuration dialog.",
        category: "Data Management"
      },
      {
        id: "2021.2-geotiff-ground-models",
        title: "Importing Gridded Ground Models from GeoTIFF",
        description: "Gridded ground models can now be imported from GeoTIFF tagged image file format (.tiff) or tagged image format (.tif) files.",
        category: "Data Management"
      },
      {
        id: "2021.2-infodrainage-import",
        title: "Importing InfoDrainage Network Data",
        description: "InfoDrainage network data can now be imported from IDDX format files. Hydrograph Inflows also importable as Inflow event from IDDX. Ruby script import supported via ICM Exchange.",
        category: "Integration"
      },
      {
        id: "2021.2-multi-coliforms",
        title: "Multi-Coliforms Modelling",
        description: "Support for multiple coliform pollutants (CF1-CF4) in water quality simulations. Diffusion coefficients include CF1-CF4 options. Extended determinants for Decaying pollutants and User defined processes (CF1DIS-CF4DIS dissolved, CF1SF1-CF4SF1/CF1SF2-CF4SF2 attached to sediment fractions). Updated Pollutograph with C1D-C4D tabs for dissolved coliform concentrations. QM Parameter dialog includes CF1-CF4 pollutants. New units: Coliform concentration, exponential decay, maximum decay rate, Coliforms (EC/IE), Coliform potency (CP).",
        category: "Water Quality"
      },
      {
        id: "2021.2-xprafts-retarding-basin",
        title: "Importing Retarding Basin Data from XPRAFTS",
        description: "Retarding basin data can now be imported from XPRAFTS XPX files to storage type nodes in InfoWorks networks.",
        category: "Integration"
      },
      {
        id: "2021.2-statistics-templates-network-type",
        title: "Statistics Templates Network Type Selection",
        description: "Statistics template updated with Network type dropdown (InfoWorks or SWMM). Location type items limited to applicable network type. SWMM networks can now include TVD Connector attributes in statistical reports.",
        category: "Results"
      },
      {
        id: "2021.2-swmm-mass-unit-factor",
        title: "Mass Unit Factor for SWMM Node Pollutant Inflows",
        description: "New Mass units factor for each SWMM node's pollutant inflow replaces deprecated Units factor in profile properties (retained for backwards compatibility). Converts pollutant mass from TSDB or event units to model units. SWMM5 INP import/export now uses Mass units factor for 'Mfactor' in [INFLOWS] section. Warning logged if both Units factor and Mass units factor applied (double application).",
        category: "SWMM"
      },
      {
        id: "2021.2-swmm-rain-gage-boundaries",
        title: "Rain Gage Boundaries for SWMM Networks",
        description: "Rain gage boundaries can now be specified for SWMM networks to define areas for spatially varying rainfall.",
        category: "SWMM"
      },
      {
        id: "2021.2-swmm-export-infiltration",
        title: "SWMM Network Export to SWMM5 File Updates",
        description: "Subcatchment Infiltration model, Soils properties, and soil properties now exported to [INFILTRATION] section of SWMM5 INP file (previously [Innovyze_Supplementary_Infiltration] section).",
        category: "Integration"
      },
      {
        id: "2021.2-swmm-engine-update",
        title: "SWMM Engine Update to v5.1.015",
        description: "SWMM5 components in SWMM simulation engine updated to SWMM 5.1.015.",
        category: "Development"
      },
      {
        id: "2021.2-swmm-general-lines",
        title: "General Lines for SWMM Networks",
        description: "General Line objects can now be added to SWMM networks. Used in mesh generation process for 2D modelling (when available) to model features acting as break lines or walls in 2D Zones.",
        category: "SWMM"
      },
      {
        id: "2021.2-swmm-flood-type",
        title: "Flood Type Property for SWMM Nodes",
        description: "New Flood type property for Junction nodes determines flooding handling when 2D simulations available for SWMM networks.",
        category: "SWMM"
      }
    ]
  },
  {
    id: "2021.1",
    version: "2021.1",
    releaseDate: "2020-11-01",
    features: [
      {
        id: "2021.1-version-numbering",
        title: "Version Numbering Change to 2021.x",
        description: "Version numbering changed to align with other Innovyze products. This version is 2021.1 (would have been 11.5 under previous system).",
        category: "Administration"
      },
      {
        id: "2021.1-clip-meshing-default",
        title: "Clip Meshing as Default Mesh Generation",
        description: "Clip meshing now default for all new 2D Zones. Excels with highly complex geometry, averages 4x faster than classic method. Switchable between Clip and Classic in 2D Zone properties. User-defined defaults configurable per network.",
        category: "Meshing"
      },
      {
        id: "2021.1-thales-licence",
        title: "Thales Licence Support for Workgroup Agents",
        description: "Thales licence type now available for remote workgroup agents. Engine size field allows selection of appropriate size (nodes/elements processed). Code displayed in read-only field.",
        category: "Administration"
      },
      {
        id: "2021.1-workgroup-database-groups",
        title: "Workgroup Master Database Groups",
        description: "Workgroup master databases can now be assigned to groups. New Master Database dialog allows group selection/creation and database naming. Group field in Open Master Database dialog filters databases by group.",
        category: "Administration"
      },
      {
        id: "2021.1-excluded-object-tools",
        title: "Excluded Object Selection and Restoration for Scenarios",
        description: "New Excluded object select tool selects excluded objects (present in base network, not in current scenario) from GeoPlan. Works with Polygon select, Trace/select links, Select all objects, Refine selection, Select isolated nodes. Restore selected excluded objects function restores chosen excluded objects to current scenario.",
        category: "Usability"
      },
      {
        id: "2021.1-extend-cross-sections",
        title: "Extending Cross Sections",
        description: "Selected cross sections can be automatically extended using Geometry > Extend cross sections option. Extend Selected Cross Section Dialog allows choosing which sections (left, right, both) and extension distance. Optional extension to bank line intersections. Ground model integration for vertex spacing and elevation setting (useful for combining surveyed channel data with floodplain ground model).",
        category: "Modeling"
      },
      {
        id: "2021.1-straighten-lines",
        title: "Straightening Lines",
        description: "Selected InfoWorks network lines can be straightened between start/end points or perpendicular to selected link using Geometry > Straighten selected lines option.",
        category: "Modeling"
      },
      {
        id: "2021.1-manning-roughness-weighting",
        title: "Weighting Choice for Manning's Roughness",
        description: "New Weight Manning roughness by n checkbox in simulation parameters allows choosing whether Manning's roughness weighted by n (HEC-RAS method) or 1/n (default for backward compatibility). Ensures same calculations as HEC-RAS when modelling in ICM.",
        category: "Modeling"
      },
      {
        id: "2021.1-tin-ground-models",
        title: "TIN Ground Model Import from Multiple Formats",
        description: "TIN ground models can now be imported from 12D, XPTIN, and LandXML formatted files. LandXML files can create new TIN ground models. Two new External Data Source types: LandXML (Breakline, Definition) and LandXML (Contour, Datapoints).",
        category: "Data Management"
      },
      {
        id: "2021.1-subcatchment-2d-point-source",
        title: "Subcatchment Drainage to 2D Point Source",
        description: "New 2D point source option in subcatchment Drains to property allows outflows directly to 2D elements (previously required indirect application via 1D objects). Represented on GeoPlan as large arrows.",
        category: "Modeling"
      },
      {
        id: "2021.1-2d-flood-mapping-performance",
        title: "Improved Performance for 2D Flood Mapping",
        description: "Flood contour performance improvement exceeding order of magnitude faster in some cases, especially with large TIN surfaces.",
        category: "Performance"
      },
      {
        id: "2021.1-minimum-flood-depth",
        title: "Minimum Depth for Displaying Flood Extents",
        description: "New Minimum calculated depth field in Layer Theme Editor for Flood object layer. Specifies minimum 2D depth for flood theme consideration. Elements not exceeding specified value excluded from flood theme generation.",
        category: "Visualization"
      },
      {
        id: "2021.1-2d-zone-3d-rendering",
        title: "Rendering Options for 2D Zones in 3D Network Window",
        description: "Three rendering options for 2D zone mesh triangles: Original (angular profile), Smoothed (smoothed profile across elements), Do not show. Smoothed option includes Translucent water and Graded water level transition options. Optional wireframe overlay for smoothed zones.",
        category: "Visualization"
      },
      {
        id: "2021.1-rectangular-flap-valve",
        title: "Rectangular Flap Valve Type",
        description: "New Valve type field for InfoWorks flap valves: Circular (default) or Rectangular. Rectangular type uses Width and Height fields. Circular uses Diameter field. Existing flap valves default to Circular.",
        category: "Modeling"
      },
      {
        id: "2021.1-water-quality-sweep-parameters",
        title: "Water Quality SWMM Build-up/Washoff Sweep Parameters",
        description: "SWMM build-up/washoff model now supports water quality simulations where Sweep end month/day earlier than Sweep start month/day.",
        category: "Water Quality"
      },
      {
        id: "2021.1-day-night-coliform-decay",
        title: "Day and Night Coliform Decay",
        description: "Different coliform decay values for day and night. T90 field specifies day value, new T90 night field specifies night value. Requires solar radiation profile in rainfall event. Models increased mortality due to light intensity during day.",
        category: "Water Quality"
      },
      {
        id: "2021.1-diffusion-defaults",
        title: "Default Values for Diffusion in Conduits",
        description: "Default values for 1D diffusion changed to River, 0, 0, 0 (previously Estuary, 19.0, 10.0, 0.0001) for accuracy in water quality simulations. Existing networks retain old values. New networks use new defaults.",
        category: "Water Quality"
      },
      {
        id: "2021.1-defconloss-impervious",
        title: "Deficit and Constant Loss Model for Impervious Surfaces",
        description: "Defconloss (Deficit and Constant Loss Model) restriction removed - now usable with Impervious surface type (previously pervious/unknown only). Validation warning issued as may not be most appropriate model.",
        category: "Modeling"
      },
      {
        id: "2021.1-gutter-spread-results",
        title: "Maxima Gutter Spread Results for InfoWorks Nodes",
        description: "Maxima gutter spread results now available for InfoWorks nodes.",
        category: "Results"
      },
      {
        id: "2021.1-hong-kong-rainfall",
        title: "Hong Kong Rainfall (Historic) Return Period Rounding",
        description: "User-specified return periods in User Defined Parameters a, b, c field now rounded to 3 decimal places when design rainfall hyetograph generated.",
        category: "Hydrology"
      },
      {
        id: "2021.1-icm-exchange-pollutograph",
        title: "ICM Exchange Pollutograph Data Import from CSV",
        description: "Pollutograph data can now be imported from CSV files using ICM Exchange.",
        category: "Integration"
      },
      {
        id: "2021.1-flow-efficiency-tables",
        title: "Flow Efficiency Tables for InfoWorks Manhole Sag Inlets",
        description: "Flow efficiency tables now available for InfoWorks manhole sag inlets.",
        category: "Modeling"
      },
      {
        id: "2021.1-green-ampt-improvements",
        title: "Green-Ampt Model Improvements",
        description: "Improvements to Green-Ampt infiltration model.",
        category: "Modeling"
      },
      {
        id: "2021.1-scs-runoff-routing-fix",
        title: "InfoWorks Runoff Surfaces with SCS Runoff Volume Models",
        description: "Runoff routing value field no longer included for runoff surfaces using SCS volume model (not required). Previously incorrectly returned validation message if no value specified.",
        category: "Modeling"
      },
      {
        id: "2021.1-hydx-network-import",
        title: "HYDX Network Import",
        description: "HYDX network import capabilities added.",
        category: "Integration"
      },
      {
        id: "2021.1-xprafts-data-import",
        title: "Importing XPRAFTS Data to InfoWorks Networks",
        description: "Network data from XPRAFTS XPX files can now be imported into InfoWorks networks.",
        category: "Integration"
      },
      {
        id: "2021.1-xpx-rainfall-events",
        title: "Importing Rainfall Events from XPRAFTS XPX Files",
        description: "Rainfall events can now be imported from XPRAFTS XPX files.",
        category: "Integration"
      },
      {
        id: "2021.1-xpswmm-rainfall-events",
        title: "Importing Rainfall Events from XPSWMM/XPStorm Files",
        description: "Rainfall events can now be imported from XPSWMM/XPStorm files.",
        category: "Integration"
      },
      {
        id: "2021.1-swmm5-time-series-import",
        title: "Importing Events from External SWMM5 Time Series Files",
        description: "Events can now be imported from external SWMM5 time series files.",
        category: "Integration"
      }
    ]
  },
  {
    id: "11.0",
    version: "11.0",
    releaseDate: "2020-05-01",
    features: [
      {
        id: "11.0-river-reach-build-all",
        title: "River Reach Build All Feature",
        description: "River reaches now have 'build all' feature combining Build sections from lines, Build banks from selected lines, Create bank lines from section ends, Build boundary from banks/section ends, and Build bank connections in single operation. Build banks from selected lines no longer restricted to two bank lines maximum.",
        category: "Modeling"
      },
      {
        id: "11.0-river-reach-bank-results",
        title: "River Reach Left and Right Bank Selection for Results",
        description: "Graph/Grid pick tool for left/right bank selection now directly asks for attributes to view (no longer asks which bank after already clicking on it).",
        category: "Usability"
      },
      {
        id: "11.0-clip-meshing-prototype",
        title: "Alternative Mesh Generation Method - Clip Meshing Prototype",
        description: "New prototype Clip meshing method provides performance and robustness improvements for complex and closely related geometries. New Mesh generation option in 2D Zone properties allows choosing Classic or Clip meshing. Clip meshing excels with highly complex geometry having vertex density far greater than desired mesh element density. Generates primary mesh first, then clips to boundaries. Existing zones assigned Classic method. Prototype status - careful review recommended.",
        category: "Meshing"
      },
      {
        id: "11.0-mixed-resolution-gridded",
        title: "Importing Mixed Resolution Gridded Ground Models",
        description: "Can now import mixed resolution files in asc or txt format with tiles smaller than 1 metre.",
        category: "Data Management"
      },
      {
        id: "11.0-snapping-mode-improvements",
        title: "Snapping Mode Vertex Highlighting",
        description: "When snapping mode on and vertex moved close to other snappable objects, vertices in adjacent objects (including overlapping ones) now highlighted. Helps position vertices more precisely.",
        category: "Usability"
      },
      {
        id: "11.0-user-defined-validation",
        title: "User Defined Engineering Validation",
        description: "Can now define custom engineering validation rules for InfoWorks networks using SQL-like syntax. Engineering Validation dialog includes Built In tab (default rules) and User Defined tab (add/edit custom rules via Validation Rule Editor dialog).",
        category: "Tools"
      },
      {
        id: "11.0-base-time-runs",
        title: "Base Time for InfoWorks Runs",
        description: "Base time and date can define epoch for all relative times in events. New Use base time checkbox in Run dialog allows specifying time/date as base time for simulation.",
        category: "Modeling"
      },
      {
        id: "11.0-suggest-feature",
        title: "Suggest a Feature Option",
        description: "New Suggest a feature option added to Help menu and Start page. Opens User Feedback Forum on Innovyze website for suggesting new features or enhancements.",
        category: "Usability"
      },
      {
        id: "11.0-hydx-network-import",
        title: "HYDX Network Import",
        description: "Network data in HYDX file format can now be imported into InfoWorks networks. Data from CSV files comprising HYDX network imported to nodes, links, subcatchments. Waste water events also importable as database items.",
        category: "Integration"
      },
      {
        id: "11.0-hong-kong-5th-edition",
        title: "Hong Kong (5th Edition) Design Rainfall",
        description: "Design rainfall includes new Hong Kong (5th edition) option.",
        category: "Hydrology"
      },
      {
        id: "11.0-arcgis-10.8-support",
        title: "Support for ArcGIS 10.8",
        description: "Now supports ArcGIS version 10.8 when using ArcGIS Engine/ArcGIS Desktop map control.",
        category: "Integration"
      },
      {
        id: "11.0-mapxtreme-9.2.0",
        title: "Support for MapXtreme 9.2.0",
        description: "MapXtreme map control updated from 8.1.0 to 9.2.0. Provides bug fixes and new projections (mostly Australia). Note: Due to incompatibility, InfoWorks ICM versions predating 11.0 will no longer work with WMS layer sources once 11.0 installed.",
        category: "Integration"
      },
      {
        id: "11.0-trace-titles-enhanced",
        title: "Attribute Names and Graph Numbers in Trace Titles",
        description: "For Object per Page and Simulation per Page custom graphs, trace titles now include attribute name and graph number. Titles still changeable via Trace Style dialog.",
        category: "Visualization"
      },
      {
        id: "11.0-rainfall-import-enhanced",
        title: "Enhanced Importing of Rainfall Events",
        description: "Import of rainfall events from generic CSV files enhanced - supports significantly wider range of CSV formats.",
        category: "Data Management"
      },
      {
        id: "11.0-swmm-design-rainfall",
        title: "Design Rainfall for SWMM Simulations",
        description: "Design rainfall now available for events in SWMM simulations.",
        category: "SWMM"
      },
      {
        id: "11.0-swmm-sub-events",
        title: "Sub-Events for Rainfall Events in SWMM Simulations",
        description: "Sub-events for rainfall events in SWMM simulations now treated same as InfoWorks simulations (previously treated as constant stream regardless of sub-event division).",
        category: "SWMM"
      },
      {
        id: "11.0-swmm-low-depth-manning",
        title: "Manning's N Roughness Coefficient for SWMM Conduits",
        description: "Two roughness coefficients (Manning's N or Low depth Manning's N) can now be specified for SWMM conduits. New Low depth Manning's N field and Depth threshold field determine which coefficient applies. When flow ≥ depth threshold, Manning's N used; when flow < threshold, Low depth Manning's N used. New conduits default to 0.010 and 0 respectively.",
        category: "SWMM"
      },
      {
        id: "11.0-swmm-infiltration-modeling",
        title: "Infiltration Modelling for SWMM Subcatchments",
        description: "Infiltration modeling can now be set per subcatchment (not just network level). New Infiltration model parameter allows choosing model per subcatchment or using network-level setting. Each subcatchment can associate with different soils having own infiltration characteristics. Only parameters applicable to selected model applied during simulation.",
        category: "SWMM"
      },
      {
        id: "11.0-swmm-additional-dwf",
        title: "Additional DWF Inflows for SWMM Nodes",
        description: "Can now specify dry weather flow of additional inflows to SWMM nodes. New Additional DWF field allows specifying constant baseline value plus up to four time patterns to adjust base flow. ICM adds all DWF flows and concentrations, multiplies total flow by total concentration.",
        category: "SWMM"
      },
      {
        id: "11.0-swmm-initial-state",
        title: "Initial State Simulations for SWMM Networks",
        description: "Network state from previous SWMM simulation can be used as initial state for first simulation in run. New 'Sim providing initial state' drop target in SWMM Run view. New Save state at end of simulation checkbox indicates whether simulation state should be saved when complete.",
        category: "SWMM"
      },
      {
        id: "11.0-swmm-runoff-results",
        title: "Impervious and Pervious Runoff Results for SWMM Subcatchments",
        description: "Impervious and pervious runoff depths now included in subcatchment simulation results.",
        category: "Results"
      },
      {
        id: "11.0-swmm-summary-results",
        title: "Summary Results for SWMM Simulations",
        description: "Summary results for SWMM simulations now available in InfoWorks ICM.",
        category: "Results"
      },
      {
        id: "11.0-swmm-water-quality-results",
        title: "Water Quality Results for SWMM Simulations",
        description: "Build-up and washoff pollutant results for SWMM simulations now included in node, link, and subcatchment results.",
        category: "Water Quality"
      },
      {
        id: "11.0-swmm-average-results",
        title: "Reporting of Average Results for SWMM Nodes and Links",
        description: "Can now include average results for nodes/links in output text report. New Average results checkbox in Schedule Hydraulic Run View (SWMM). When checked, time series results reported as average values over reporting time step. When unchecked (default), results are interpolated point values at end of reporting time step.",
        category: "Results"
      },
      {
        id: "11.0-infoswmm-import",
        title: "Importing InfoSWMM Model Networks",
        description: "Model data from InfoSWMM networks can now be imported to SWMM networks in InfoWorks ICM.",
        category: "Integration"
      },
      {
        id: "11.0-swmm-network-export",
        title: "Exporting SWMM Network Data",
        description: "SWMM networks can now be exported to CSV files, Snapshot files, and GIS file formats (Geodatabase, MIF, SHP, TAB) via Network menu Export options or Explorer window context menu.",
        category: "Integration"
      },
      {
        id: "11.0-swmm-results-export-gis",
        title: "Exporting SWMM Results to GIS File Formats",
        description: "Two new menu options (Export to GIS, Export maxima to GIS) available in Results menu for SWMM networks. Export to GIS enables exporting time varying and maximum results to MIF, SHP, TAB, or Geodatabase. Export maxima to GIS exports maximum results to same formats.",
        category: "Integration"
      },
      {
        id: "11.0-swmm5-encoding",
        title: "Encoding Systems for SWMM5 Network Data Import and Export",
        description: "Can now choose ASCII, UTF-8, or UTF-8 BOM encoding when importing/exporting SWMM5 network data. UTF-8/UTF-8 BOM particularly relevant for non-Western Latin characters.",
        category: "Integration"
      },
      {
        id: "11.0-swmm5-import-enhancements",
        title: "SWMM5 Network Data Imports to SWMM Networks",
        description: "AVERAGES from [REPORT] section can now be imported to Average results checkbox. Data from [Innovyze_Supplementary_DryWeatherFlow] section imported to Additional DWF grid (if Type=Flow) or Pollutant DWF grid. Data from [Innovyze_Supplementary_Infiltration] section imported to SWMM Subcatchment objects.",
        category: "Integration"
      },
      {
        id: "11.0-swmm5-export-enhancements",
        title: "SWMM Network Data Exports to SWMM5 Text Files",
        description: "Additional DWF grid values exported to [Innovyze_Supplementary DryWeatherFlow] section. Pollutant DWF grid exported to [DWF] section (first instance) or [Innovyze_Supplementary DryWeatherFlow] (subsequent instances). Infiltration model field exported to [Innovyze_Supplementary_Infiltration] if not Default.",
        category: "Integration"
      },
      {
        id: "11.0-swmm-name-generation",
        title: "Node and Link Name Generation for SWMM Networks",
        description: "Automatic node and link name generation now available for SWMM networks via Network menu Name generation option. Option renamed from 'Node naming options' to 'Name generation'. Node Name Generation tab changed to 'Nodes'. New variable {T} can append object type to node/link names when Automatic Name Generation enabled.",
        category: "SWMM"
      },
      {
        id: "11.0-spatial-tsdb-performance",
        title: "Improvement in Pre-processing Speeds for Spatial Time Series Databases",
        description: "Under certain spatial rainfall conditions (especially large cell counts), pre-processing times improved noticeably.",
        category: "Performance"
      },
      {
        id: "11.0-ads-telemetry-tsdb",
        title: "New Data Source for Scalar TSDB - ADS Telemetry",
        description: "New ADS Telemetry data source type for observed data in scalar TSDBs. Allows connecting to ADS flow monitoring website to access location and entity data for inclusion in TSDB. Table and Data column fields contain downloadable list of locations and entities from ADS website.",
        category: "Data Management"
      }
    ]
  },
  {
    id: "10.5",
    version: "10.5",
    releaseDate: "2019-12-01",
    features: [
      {
        id: "10.5-swmm-integration",
        title: "SWMM Integration - New Network Type and Engine",
        description: "Innovyze-adapted version of US EPA's Storm Water Management Model (SWMM) now available as additional modeling option. New SWMM simulation engine alongside established Sim engine. New SWMM network type with distinct data structures (InfoWorks networks retain original icon). New network objects and database items (SWMM Climatology, Time Patterns, Pollutograph, Run). SWMM simulations leverage Agent functionality for scheduling, pausing, stopping, and distribution across ICM agents. 1D only, dynamic wave routing. Includes SUDS/LID representation, hydrological/hydraulic/water quality modeling. Events separated from network data (multiple events testable without network modifications). Scenario and version control management supported.",
        category: "SWMM"
      },
      {
        id: "10.5-rtc-fuzzy-centaur",
        title: "New RTC Controllers - FUZZY and CENTAUR",
        description: "Two new RTC Controller types for variable sluice gate control at Global or Regulator level. CENTAUR allows CENTAUR™ gates (Environmental Monitoring Solutions) representation in InfoWorks networks. FUZZY controller uses Member functions and Fuzzy rules dependants to determine variable sluice gate operation.",
        category: "Modeling"
      },
      {
        id: "10.5-subcatchment-output-lag",
        title: "Output Lag and Bypass Runoff Parameters for Subcatchments",
        description: "New Output lag parameter allows fixed time delay for subcatchment outflow to 'drains to' destination. New Bypass runoff checkbox (for subcatchments draining to another subcatchment) - if checked, outflow added to total outflow of destination; if unchecked, applied as additional input to destination runoff surfaces. Useful for XPRAFTS users migrating models (ICM subcatchment with non-zero output lag equivalent to XPRAFTS subcatchment draining to lag link).",
        category: "Modeling"
      },
      {
        id: "10.5-2d-conduits-performance",
        title: "Processing Time Improved for Conduits (2D)",
        description: "Computational times for conduits (2D) greatly improved, giving faster simulation results than earlier versions.",
        category: "Performance"
      },
      {
        id: "10.5-2d-summary-log",
        title: "Improvements to 2D Summary Log",
        description: "New volume balance error as percentage of net inflow (VBEPNI) metric added to volume balance summary report. Provides more accurate volume balance error than VBEPIO metric (based on sum of inflows/outflows). Only non-zero denominator metrics output in log file.",
        category: "Results"
      },
      {
        id: "10.5-refh-timestep-control",
        title: "Timestep Control for ReFH Direct Runoff Calculations",
        description: "Same timestep control options for ReFH direct runoff phase as for simulation. Using 'Stop simulation at end of time varying data' option may make ReFH direct runoff phase much faster (may no longer need full run duration).",
        category: "Modeling"
      },
      {
        id: "10.5-nimrod-flexible-naming",
        title: "Nimrod File Naming for Spatial Time Series Databases",
        description: "Nimrod data file naming for spatial TSDB now flexible (no longer restrictive), as long as file encoded as valid Nimrod format.",
        category: "Data Management"
      },
      {
        id: "10.5-tslag-expression",
        title: "New Time Series Expression for Shifting Timestamps",
        description: "New TSLAG(input_series, lag_seconds) time series expression. Constructs series with same data points as input but time stamps shifted forward (lagged) by specified seconds. Negative seconds shifts timestamps backwards.",
        category: "Tools"
      },
      {
        id: "10.5-spatial-tsdb-init-performance",
        title: "Initialisation Time Improved for Simulations Using Spatial TSDBs",
        description: "Significant improvements to initialisation times for spatial TSDBs with high cell count (most noticeable at 10,000+ cells).",
        category: "Performance"
      },
      {
        id: "10.5-pressurised-pipes-papers",
        title: "Technical Papers for Modelling of Pressurised Pipes",
        description: "Two new technical papers added to help: 'Modelling of Pressurised Pipes within InfoWorks ICM' and 'Modelling Steeply Sloping Pressurised Pipes'.",
        category: "Documentation"
      },
      {
        id: "10.5-legacy-states-removed",
        title: "Legacy State Files No Longer Supported",
        description: "Initial state simulations generated using job agents prior to InfoWorks ICM version 4.0 are no longer supported.",
        category: "General"
      },
      {
        id: "10.5-conduit-status-improvements",
        title: "Conduit Status Improvements",
        description: "Open conduits previously returning jet flow boundary condition now return free boundary condition (critical or normal flow). Depth restriction at conduit end removed for open conduits (suitable for closed conduits only). Most noticeable in networks with river reaches connected to 2D zones with banks - depth in reach may exceed highest point defined for section when banks active.",
        category: "Modeling"
      },
      {
        id: "10.5-arrow-themes-improvements",
        title: "Improvements to Arrow Themes",
        description: "Line/Link arrow theme improved. Size and colour of arrows can now be set using symbol size and symbol colour functions (arrows can differ from line size/colour).",
        category: "Visualization"
      },
      {
        id: "10.5-snow-melt-swmm5",
        title: "Snow Melt Model Updated to SWMM5",
        description: "Snow melt model updated from SWMM4 continuous simulation model to SWMM5 version.",
        category: "Modeling"
      },
      {
        id: "10.5-multipart-shapefile-import",
        title: "Import of Multi-Part Shapefiles Improved",
        description: "Multi-part shapefile import has been improved.",
        category: "Data Management"
      },
      {
        id: "10.5-binary-export-sorted",
        title: "Binary Export Result Files Now Sorted Alphabetically",
        description: "Results exported in binary format now sorted alphabetically (previously unsorted).",
        category: "Results"
      },
      {
        id: "10.5-html-log-improvements",
        title: "HTML Log Files Layout Improved",
        description: "Layout and appearance of HTML log files improved.",
        category: "Usability"
      }
    ]
  },
  {
    id: "10.0",
    version: "10.0",
    releaseDate: "2019-05-01",
    features: [
      {
        id: "10.0-multiple-sim-episodes",
        title: "Multiple Simulations for Different Time Periods",
        description: "Can now include Episode collection in run. Episode collection contains various start/end times allowing multiple hydraulic and runoff-only simulations for each time varying input (rainfall event, flow survey, TSDB). If run includes scenarios, simulations based on episode collection also run for each scenario. Episode number appended to simulation name in Explorer.",
        category: "Modeling"
      },
      {
        id: "10.0-runoff-only-pdm-warmup",
        title: "Runoff Only Simulations and PDM Warm-up",
        description: "When Runoff only simulation checked, new dropdown lets you choose whether runoff-only simulations performed during warm-up, between episodes, or whole run (default). New Warm-up duration field specifies period for PDM model states warm-up before hydraulic simulations start (allows network to reach steady state for realistic hydraulic conditions). '_RO' appended to runoff-only simulation names.",
        category: "Modeling"
      },
      {
        id: "10.0-simulation-properties-rerun",
        title: "Re-run a Simulation and View Its Properties",
        description: "New Simulations Properties view displays simulation properties including start/end times and simulation providing initial state. Includes Re-run simulation button to re-run particular simulation (previously required re-running all simulations in run).",
        category: "Usability"
      },
      {
        id: "10.0-groundwater-infiltration-results",
        title: "Groundwater Infiltration and Evaporation Rate in Results",
        description: "Groundwater infiltration and raw evaporation rate for subcatchment now included in results graphs/grids. Two new subcatchment results fields: Evaporation profile and Max Evaporation rate.",
        category: "Results"
      },
      {
        id: "10.0-subcatchment-results-renamed",
        title: "Renaming of Subcatchment Results QINFSOIL and QINFGRND",
        description: "When groundwater infiltration not modelled, soil storage not included. Results renamed: Infiltration to soil store → Infiltration to soil (QINFSOIL), Infiltration to ground store → Infiltration to groundwater (QINFGRND). QINFSOIL displayed regardless of Ground Infiltration Event usage.",
        category: "Results"
      },
      {
        id: "10.0-sql-multiple-networks",
        title: "SQL Queries Across Model Networks",
        description: "Run query across multiple networks option allows SQL query across different model networks.",
        category: "Tools"
      },
      {
        id: "10.0-sobek-importer-extended",
        title: "SOBEK Importer Extended",
        description: "SOBEK importer extended - cross section layers can now be imported from SOBEK network LIT files. Data from cross section layer creates nodes with downstream conduit or channel links in InfoWorks ICM. Cross section information from SOBEK 'ty' attribute imported into conduit, shape, channel and channel shape properties.",
        category: "Integration"
      },
      {
        id: "10.0-microdrainage-importer-enhanced",
        title: "MicroDrainage Importer Enhancements",
        description: "Can now import: Sediment Depth (pipes to conduits), Percentage Impervious (pipes to subcatchments). For online controls, manhole inserted between structure link and shortened pipe with Shaft/Chamber plan areas set to 1m². Swales with non-zero Cap Volume at Depth imported as closed conduit (previously channel link).",
        category: "Integration"
      },
      {
        id: "10.0-state-saving-pdm-srm",
        title: "State Saving with PDM, SRM and Legacy RDII",
        description: "New approach to saving states for PDM, SRM and pre-SWMM5 RDII models using rainfall/evaporation histories - state files significantly smaller in most cases.",
        category: "Performance"
      },
      {
        id: "10.0-ground-infiltration-events",
        title: "Ground Infiltration Events Improvements",
        description: "New ground infiltration objects no longer contain automatic read-only timestep record. ICM sets initial ground water levels by: 1) sub-events properties, 2) profile properties for specified subcatchments/Groundwater IDs, 3) profile timestep records for specified subcatchments/Groundwater IDs.",
        category: "Modeling"
      },
      {
        id: "10.0-gpu-2d-conduits",
        title: "Improvements to GPU Functionality for 2D Conduits",
        description: "GPU version of 2D engine now supports 2D conduits.",
        category: "Performance"
      },
      {
        id: "10.0-custom-graphs-performance",
        title: "Improvements to Performance of Custom Graphs",
        description: "Performance of custom graphs when changing graph properties has been improved.",
        category: "Performance"
      },
      {
        id: "10.0-uk-grid-node-naming",
        title: "Automatic Node Name Generation Using UK Grid Method",
        description: "Node numeration based on UK National Grid location increased from 99 to 1295 unique identifiers per 100m². Last two 'numbers' in node ID may include letters or mixture of letters/numbers.",
        category: "Tools"
      },
      {
        id: "10.0-arcgis-10.7",
        title: "Support for ArcGIS 10.7",
        description: "Now supports ArcGIS version 10.7 when using ArcGIS Engine/ArcGIS Desktop map control.",
        category: "Integration"
      },
      {
        id: "10.0-elevation-validation-6000m",
        title: "Validation Warning for Elevations Over 6000 Metres",
        description: "Validation warning limit for elevations increased from 3000m to 6000m. Affects multiple network object parameters including nodes, bridges, conduits, channels, pumps, river reaches, weirs, and other objects.",
        category: "Validation"
      },
      {
        id: "10.0-factory-defaults-layout",
        title: "Manage Layouts - Factory Defaults",
        description: "New Factory defaults layout consisting of unmodified layouts/factory settings for all master database objects. Loading Factory default resets all user-defined local layouts to factory settings. Previous Default layout removed.",
        category: "Usability"
      },
      {
        id: "10.0-config-menu-object-properties",
        title: "Configuration Menu in Object Properties Window",
        description: "Reset option on Configuration menu now includes current object name whose layout can be reset. Save option renamed to Save locally. DReset all option removed (use Factory defaults layout in Manage Layout dialog instead to reset all user-defined local layouts).",
        category: "Usability"
      },
      {
        id: "10.0-enable-disable-sub-theme",
        title: "Enable/Disable Sub Theme from Thematic Key Window",
        description: "Can enable/disable sub themes from Thematic Key window using Enable context menu option. Disabled sub themes not displayed on GeoPlan, name greyed with disable icon.",
        category: "Visualization"
      },
      {
        id: "10.0-autocad-2018-2019",
        title: "AutoCAD DWG Files 2018 and 2019",
        description: "Updating network from AutoCAD 2018 and 2019 DWG format files now supported.",
        category: "Integration"
      },
      {
        id: "10.0-geoplan-layer-sorting",
        title: "GeoPlan Layer Sorting Enhancement",
        description: "Map layer sorting improved - up to 5 times quicker for layers to be displayed in GeoPlan.",
        category: "Performance"
      },
      {
        id: "10.0-opc-data-sources-deprecated",
        title: "OPC Data Sources Deprecated",
        description: "OPC (data source connection to OPC-compliant SCADA system via SCADAMaster or Infinity System) can no longer be used as data source Type in time series databases. New Infinity System Configuration objects cannot be added, however existing ISC objects and associated functionality still supported.",
        category: "General"
      },
      {
        id: "10.0-scenarios-clipboard-copy",
        title: "Copying to Clipboard in Manage Scenarios Dialog",
        description: "Can now use Ctrl+C to copy selected rows in Manage Scenarios grid to Windows clipboard. Header row and each selected row displayed as separate line when pasted.",
        category: "Usability"
      },
      {
        id: "10.0-scenario-size-columns",
        title: "Scenario Size Indicated in Manage Scenarios Grid",
        description: "Two new columns in Manage Scenarios grid: Object column (total objects in Base or additional/overridden objects), Excluded column (total Base objects not included in scenario).",
        category: "Usability"
      },
      {
        id: "10.0-scenario-performance",
        title: "Performance Improvements for Scenarios",
        description: "Performance improved for scenarios with large numbers of differences from Base scenario.",
        category: "Performance"
      },
      {
        id: "10.0-roughness-upper-limit",
        title: "Upper Warning Limit for Roughness Values Increased",
        description: "Upper limit validation warning for roughness increased to reflect overland flow values. Ranges: Manning's 1/n (1.0-999.0), Colebrook-White (0.1-999.0), Manning's N (0.009-0.8), Hazen Williams (20.0-5000.0).",
        category: "Validation"
      },
      {
        id: "10.0-tcp-port-check",
        title: "TCP/IP Port Number Check",
        description: "Error messages displayed in Agents Options dialog if port number outside valid range or duplicate port number used.",
        category: "Tools"
      },
      {
        id: "10.0-refh-progress-indicator",
        title: "Progress of ReFH Direct Runoff Calculations",
        description: "During simulation, ReFH direct runoff calculation progress (%) now indicated in Activity field of Job Progress window.",
        category: "Usability"
      },
      {
        id: "10.0-fw-format1-tsdb",
        title: "New Data Source for TSDB - FW Format1",
        description: "New FW Format1 data source type for observed/forecast data in scalar TSDBs. Enables multiple data streams in FloodWorks Data Transfer File Format 1.",
        category: "Data Management"
      },
      {
        id: "10.0-tsdb-jump-to-date",
        title: "Jump to Date in TSDB Data Grids",
        description: "New Go to Date button and date field in time series data grid. Selects last data point of specified date at top of grid for quick location.",
        category: "Usability"
      },
      {
        id: "10.0-tsdb-import-export-config",
        title: "Import and Export of Configuration Data for TSDBs",
        description: "Can import/export observed/forecast stream configuration data (stream names, units, external data sources, thresholds) from/to CSV files. New Import from csv file and Export to csv file context menu options. Import Stream Configuration dialog allows column mapping and testing before import.",
        category: "Data Management"
      }
    ]
  },
  {
    id: "9.5",
    version: "9.5",
    releaseDate: "2018-11-01",
    features: [
      {
        id: "9.5-euler-type-ii-rainfall",
        title: "Euler Type II Design Rainfall",
        description: "Can generate Euler Type II design rainfall using Euler rainfall type II method with KOSTRA-DWD 2010R data. Rainfall data for any coordinates within Germany bounded rectangle using TRS 1989, Lambert Conformal Conic, EPSG:3034 projection. Return period, duration and timestep required. Events viewable on grid/graph, exportable to InfoWorks format or CSV.",
        category: "Hydrology"
      },
      {
        id: "9.5-german-hydrology",
        title: "German Hydrology - DWA Runoff Volume Model",
        description: "New DWA (Grenzwertmethode) runoff volume model added to Runoff volume type. Horton-related parameters renamed: Horton initial→Initial infiltration, Horton limiting→Limiting infiltration, Horton decay→Decay factor, Horton recovery→Recovery factor. New Cascade routing model option added.",
        category: "Hydrology"
      },
      {
        id: "9.5-rafts-routing-model",
        title: "RAFTS Routing Model",
        description: "New RAFTS routing model option (Laurenson Runoff Routing procedure). Calculates storage delay coefficient for subcatchment to develop non-linear runoff hydrograph. Storage delay coefficient may be calculated on subcatchment or runoff surface basis.",
        category: "Hydrology"
      },
      {
        id: "9.5-2d-conduits",
        title: "2D Conduits for 2D Simulations",
        description: "Two new conduit types: Linear Drainage (2D) and Conduit (2D) for introducing unidimensional hydraulic structures directly in 2D engine. Allow flow transfer between two 2D zone areas. Linear Drainage captures surface flow from 2D mesh to drainage system. New Conduit type parameter with three choices: Conduit, Linear Drainage (2D), Conduit (2D). Existing conduits default to Conduit type.",
        category: "Modeling"
      },
      {
        id: "9.5-connect-2d-node",
        title: "New Type of 2D Node - Connect 2D",
        description: "New Connect 2D node type to facilitate 2D conduits modeling. Connection type parameter defines how 2D conduit exchanges flow at upstream/downstream end vertex. Can be set to Closed, Lost, 2D or Break.",
        category: "Modeling"
      },
      {
        id: "9.5-2d-simulation-results",
        title: "New Simulation Results for 2D Conduits",
        description: "New link results: Maximum/Cumulative flow from 2D Zone, Maximum/Cumulative flooding onto 2D Zone, Flooding onto 2D zone (time varying), Flow from 2D zone (time varying). New node results: Flow (time varying), Cumulative flow (summary) for Connect 2D nodes with connection type 2D or Lost.",
        category: "Results"
      },
      {
        id: "9.5-microdrainage-importer",
        title: "MicroDrainage Importer",
        description: "Can now import data from MicroDrainage MDX files into InfoWorks ICM.",
        category: "Integration"
      },
      {
        id: "9.5-sobek-importer-partial",
        title: "SOBEK Importer - Partial Implementation",
        description: "Partial SOBEK importer available (to be extended in future). Can import topographic and bed friction layers from SOBEK network LIT files into InfoWorks ICM. Data defines nodes and conduits.",
        category: "Integration"
      },
      {
        id: "9.5-gated-weir",
        title: "Gated Weir",
        description: "New gated weir ancillary control object as link network object. Can be added via GeoPlan, Long View, Links grid, or imported from InfoWorks RS. Gated weirs from InfoWorks RS now imported as gated weirs (previously converted to variable crest weirs) for accurate modeling.",
        category: "Modeling"
      },
      {
        id: "9.5-infonet-rebrand",
        title: "InfoNet Rebranded as InfoAsset Manager",
        description: "InfoNet rebranded to InfoAsset Manager for clearer Innovyze product grouping. InfoAsset range includes InfoAsset Planner (was InfoMaster), InfoAsset Mobile (was InfoNet Mobile), InfoAsset Online (was InfoNet Web). Licenses now issued for InfoAsset Manager.",
        category: "General"
      },
      {
        id: "9.5-infiltration-units",
        title: "Infiltration Units Now Used for Infiltration-Related Data Fields",
        description: "Network objects' infiltration-related data fields changed from rainfall intensity (R) units to infiltration (I) units (no data implications). Affects Infiltration Surface (2D), Runoff Surface, Bridge, Channel, River Reach, Conduit, and Node data fields.",
        category: "Modeling"
      },
      {
        id: "9.5-swmm-engine-5.1.013",
        title: "Simulation Engine Updated to Support SWMM v5.1.013",
        description: "SWMM5 components in simulation engine updated to SWMM 5.1.013.",
        category: "SWMM"
      },
      {
        id: "9.5-hourly-rate-unit",
        title: "Hourly Rate Unit",
        description: "New hourly rate (HR) unit for specifying Horton decay and recovery factors for Runoff Surface and Infiltration Surface (2D). Previously specified factors not affected.",
        category: "Modeling"
      },
      {
        id: "9.5-arr-storm-generator-update",
        title: "ARR Storm Generator Updated",
        description: "ARR Storm Generator (downloads from Australian Rainfall and Runoff and Bureau of Meteorology) updated to version 1.0.175.",
        category: "Hydrology"
      },
      {
        id: "9.5-variable-crest-width-weirs",
        title: "Variable Crest and Width Weirs Separated",
        description: "Maximum/minimum weir parameters separated. New Maximum Crest and Minimum Crest parameters provide elevation (Z) for variable crest level weirs (VCWEIR). Existing maximum/minimum renamed to Maximum Width and Minimum Width for variable width weirs (VWWIER). If no VCWEIR max/min crest specified, Maximum/Minimum Width used instead (preserves previously defined parameters).",
        category: "Modeling"
      },
      {
        id: "9.5-csv-blank-lines",
        title: "Importing Events from Generic CSV File Formats",
        description: "Blank lines can now be included when importing event data from generic CSV file. Particularly useful for importing XPRAFTS hydrographs.",
        category: "Data Management"
      },
      {
        id: "9.5-logexpirydays-keyword",
        title: "New Keyword for Agent Options - LOGEXPIRYDAYS",
        description: "New LOGEXPIRYDAYS keyword specifies number of days before agent daily log files deleted.",
        category: "Tools"
      },
      {
        id: "9.5-2d-zones-cropped-3d",
        title: "2D Zones Cropped to Fit GeoPlan Extents in 3D Network Window",
        description: "Can display 2D zone cropped to GeoPlan extents in 3D Network Window by pressing CTRL and selecting New 3D network window or clicking toolbar button.",
        category: "Visualization"
      },
      {
        id: "9.5-sky-exclude-3d",
        title: "Sky Can Be Excluded in 3D Network Window",
        description: "New property to turn on (default) or off blue sky with clouds in 3D View background.",
        category: "Visualization"
      },
      {
        id: "9.5-workgroup-db-size",
        title: "Size Restriction Removed for Workgroup Databases",
        description: "Maximum number of objects in workgroup database increased to extent that no longer limits database size.",
        category: "Performance"
      },
      {
        id: "9.5-multi-gpu-pci",
        title: "2D Engine - Multi GPU Support via PCI Switches",
        description: "2D engine now supports GPU cards sharing same PCI bus through PCI switch. Configurable in Agent Options dialog.",
        category: "Performance"
      },
      {
        id: "9.5-export-snapshots-context",
        title: "Exporting Snapshot Files from Context Menu",
        description: "Snapshot files can now be exported from Explorer window context menu (without opening network on GeoPlan). Can choose which scenario and version to export.",
        category: "Usability"
      },
      {
        id: "9.5-spatial-tsdb-forecast-enhancement",
        title: "Enhancement for Spatial TSDB ASCII and Binary Grid Forecast Data Lead Times",
        description: "ASCII and Binary Grid format files with lead time for less than an hour can now be included in spatial TSDB configuration. Files must have filename format *YYYYMMDDHH_hhhmm (where * is file identifier). TSD functionality only available if TSD option enabled on licence.",
        category: "Data Management"
      },
      {
        id: "9.5-spatial-tsdb-new-formats",
        title: "Additional Data File Formats for Spatial TSDBs",
        description: "Three new file formats available for spatial TSDB configuration: Geotiff - Meteo Group (observed and forecast), Grib 1 -AEMET Madrid (forecast), and HDF5 OPERA (observed). HDF5 OPERA supports IRM (Belgian Weather Service) format, Grib 1 -AEMET Madrid supports Spanish Meteorological Agency files, Geotiff - Meteo Group supports Meteogroup files.",
        category: "Data Management"
      },
      {
        id: "9.5-netcdf-ausbom-update",
        title: "Update for NetCDF AUS.BOM Data File Format for Spatial TSDBs",
        description: "NetCDF Australian Bureau of Meteorology (NetCDF AUS.BOM) observed data format files updated to support NetCDF Climate and Forecast (CF) Metadata Conventions, version 1.6.",
        category: "Data Management"
      },
      {
        id: "9.5-tsdb-performance",
        title: "TSDB Performance Enhancements",
        description: "Performance enhancements implemented to reduce TSDB file fragmentation.",
        category: "Performance"
      },
      {
        id: "9.5-master-db-layouts",
        title: "Master Database Layouts",
        description: "Master database layouts can now be loaded, saved or deleted using Manage Layout dialog. Dialog displayed when Layout > Manage layouts... selected from Configuration menu on Object Properties Window Toolbar.",
        category: "Usability"
      },
      {
        id: "9.5-tsdb-use-latest",
        title: "Updating TSDB to Latest Versions",
        description: "Update to latest button renamed to Use latest (more accurately describes function - uses latest available local TSDB version). Refresh time series databases from external sources option now disabled unless Use latest selected, preventing InfoWorks Agent from unnecessarily locking out other pre-processors updating same TSDB.",
        category: "Data Management"
      }
    ]
  },
  {
    id: "9.0",
    version: "9.0",
    releaseDate: "2018-05-01",
    features: [
      {
        id: "9.0-text-reports",
        title: "Text Reports - Removed File Size Limit",
        description: "Previously 50MB limit for opening log files, PRN or SWMM SUDS/LID report files as text in InfoWorks ICM has been removed. Files <4MB display in general Text File View. Files 4MB-2GB show progress window with cancel option. Files >2GB or with memory issues offer option to open in external application like Notepad. Progress window added for formatting log file warnings with X,Y coordinates as hyperlinks (can cancel, leaving unformatted coordinates as HML tagged text).",
        category: "Usability"
      },
      {
        id: "9.0-suds-area-adjustment",
        title: "SUDS Area Adjustment - Specify Runoff Surface",
        description: "Can now specify which runoff surface or type (permeable/impermeable) a SUDS control is located on. Previously SUDS control surface area subtracted proportionally from all subcatchment surfaces. New Surface field in Subcatchment Data Fields for SUDS controls (initially undefined for objects from previous versions). Validation checks Area and Number of units don't exceed Surface area. Simulation log includes list of adjusted subcatchment surface areas and indicates if no adjustment performed.",
        category: "Hydrology"
      },
      {
        id: "9.0-river-reach-validation",
        title: "Improved Validation for River Reaches",
        description: "All left and right bank points for every river reach checked against lowest point (invert) on nearby sections. Validation warning issued for river reaches where bank line levels lower than section bed levels. Warning includes X,Y coordinates of suspect bank points, allowing users to amend bank level elevation before simulation.",
        category: "Validation"
      },
      {
        id: "9.0-damage-functions-import",
        title: "New Import Option for Damage Functions - MCM 2017 Data",
        description: "New import option 'from MCM 2017 Data' allows importing damage curves from csv files supplied with Flood and Coastal Erosion Risk Management Handbook and Data for Economic Appraisal 2017 into new/existing Damage Function. Previous option renamed to 'from MCM 2005/2010 Data...' (no other changes).",
        category: "Data Management"
      },
      {
        id: "9.0-feh2013-point-data",
        title: "FEH2013 Point Data Import for Design Rainfall Events",
        description: "Point descriptor parameters (useful for urban sewer catchment modelling) can now be imported from FEH2013 point data XML files into design rainfall events. Point files include rainfall depths for pre-defined return periods/durations. Imported rainfall depths and catchment areas passed to ReFH2, which extracts required data, stored as CSV files and used as hyetograph data for rainfall event.",
        category: "Hydrology"
      },
      {
        id: "9.0-user-defined-wq-process",
        title: "New User-Defined Water Quality Process Type - Growth-Product",
        description: "New Growth-product process type option in user-defined water quality parameters allows interaction between dissolved and attached pollutants (e.g. radioactive contaminant entering as dissolved/attached, with part of dissolved converting to attached). New Scaling factor type option (Variable/Constant). Coefficients increased from 4 to 7, determinants from 3 to 6. Pre-existing user-defined parameters default to Constant scaling. New growth-product equation implemented, existing growth/equilibrium equations updated.",
        category: "Water Quality"
      },
      {
        id: "9.0-tuflow-invert-levels",
        title: "TUFLOW Network Import - Invert Levels for Links",
        description: "For imported TUFLOW link type 'S', if MIF fields 7 and 8 are null (-99999), invert level now read from channel shape CSV file (previously null MIF values converted to zero-based depths).",
        category: "Integration"
      },
      {
        id: "9.0-hec-snyder",
        title: "New Routing Model Option - HEC Snyder (Snyder Alameda)",
        description: "New routing model parameter option 'HEC Snyder (Snyder Alameda)' available for runoff surfaces, implementing the HEC Snyder Unit Hydrograph Model.",
        category: "Hydrology"
      },
      {
        id: "9.0-schedule-hydraulic-deprecated",
        title: "Deprecated Read Subevent UCWI & Evaporation Option",
        description: "Option 'Read subevent UCWI & evaporation' on Schedule Hydraulic Run View deprecated but retained for backwards compatibility. Previously used for changing evaporation rate/UCWI per sub-event. 'Read Subevent NAPI (New UK Method)' also deprecated (only enabled if Read subevent UCWI & evaporation selected).",
        category: "Modeling"
      },
      {
        id: "9.0-network-version-indicator",
        title: "Visual Indicator for More Recent Committed Network Version",
        description: "Red border around 'Update to latest' button highlights when more recent committed network version exists than currently selected in Model Network box.",
        category: "Usability"
      },
      {
        id: "9.0-zoom-spatial-tsdb",
        title: "Zoom to Spatial TSDB in Network",
        description: "When spatial TSDB opened on network, now possible to zoom to the area of network it applies to.",
        category: "Usability"
      },
      {
        id: "9.0-export-scalar-tsdb",
        title: "Export Data from Scalar TSDB Grid",
        description: "New context-menu option 'Export selected rows...' enables exporting scalar time series data from selected grid rows in TSDB grid to specified CSV file.",
        category: "Data Management"
      },
      {
        id: "9.0-local-network-message",
        title: "Opening Local Networks on GeoPlan",
        description: "Message displayed when opening network with changes committed by others but local copy has uncommitted changes made by you. Allows choosing whether to update local copy with committed changes or cancel operation.",
        category: "Usability"
      },
      {
        id: "9.0-tvd-connector-parameters",
        title: "TVD Connector Parameters Renamed for Clarity",
        description: "'Input units' parameters renamed to 'Input units type' with drop-down lists no longer including specific unit (units determined by external units of connected data stream or expression units, not drop-down). 'Expression units' parameter renamed to 'Connector units' (can specify units for constant or output expression).",
        category: "Usability"
      },
      {
        id: "9.0-wastewater-profile-validation",
        title: "Wastewater Profile Editor - Parameter Validation and Upper Limit Increase",
        description: "Common page of Wastewater Profile Editor now highlights all parameters (not just Pollutant) when value outside permitted range. Previous warning message removed. Upper limit increased to 100000 for all relevant parameters except pH. pH permitted values now 0-14.",
        category: "Validation"
      },
      {
        id: "9.0-arma-error-prediction",
        title: "ARMA Error Prediction",
        description: "Auto-Regressive Moving-Average (ARMA) method for error prediction. Calculate difference between actual observed flows from subcatchment and model-predicted runoff. ARMA model referenced by subcatchment, TVD connector connects TSDB data stream/another TVD connector for observed flow. During simulation: observed/predicted values calculated using ARMA model, subcatchment results include unmodified runoff flow and ARMA-modified outflow. Post-processing forecast predictions using observed data and ARMA model for node (comparison result level), network results point 1D (comparison flow/depth/velocity), or 2D object (comparison depth/speed).",
        category: "Forecasting"
      },
      {
        id: "9.0-2d-mesh-improvements",
        title: "Improvements in Size and Display Time of 2D Meshes",
        description: "2D mesh capacity increased to ~30 million elements. Improved performance when displaying 2D zone mesh elements/triangles in GeoPlan - only necessary mesh data loaded (previously entire mesh data, including data unrelated to drawing, was loaded).",
        category: "Performance"
      },
      {
        id: "9.0-sql-spatial-rain",
        title: "SQL - Spatial Rain Layer",
        description: "New 'spatial rainfall' layer added to Layers option in SQL. Allows spatial search of rainfall radar cells used in simulation using SPATIAL keyword.",
        category: "Tools"
      },
      {
        id: "9.0-xmp-observed-rainfall",
        title: "X-MP Observed Rainfall - Newer Format Support",
        description: "Spatial TSDB now supports newer format for X-MP Observed rainfall.",
        category: "Data Management"
      },
      {
        id: "9.0-swmm-buildup-washoff",
        title: "New SWMM Build-up/Wash Off Model",
        description: "New build-up/wash off land use model based on EPA's Storm Water Management Model (SWMM) land use part. Alternative to existing Innovyze model for water quality simulations. Enables pollutant build-up/wash-off and potential street cleaning removal calculation for each land use during simulation. New Build-up/Washoff Land Use tab on Subcatchment Grid. New Washoff parameter in water quality/sediment parameters (choose model, provide non-attached pollutants info, potency factors, sweep schedule for SWMM model). SWMM5 importer imports relevant land use data, can specify ICM determinant for each imported SWMM5 pollutant.",
        category: "Water Quality"
      }
    ]
  },
  {
    id: "8.5",
    version: "8.5",
    releaseDate: "2017-11-01",
    features: [
      {
        id: "8.5-rainfall-profiles-increase",
        title: "Increase in Number of Rainfall Profiles in Rainfall Events",
        description: "Rainfall events can now contain 999,999,999 profiles when user-created. Rainfall events from TSDB runs can contain 2,147,483,647 profiles. TSDB-generated rainfall events passed to engine in binary format for efficiency and quicker run times. Allows spatial rainfall at finer resolution and over greater area than previous versions.",
        category: "Hydrology"
      },
      {
        id: "8.5-tsdb-description-fields",
        title: "New Description Fields for TSDB",
        description: "New Description field added to Observed and Forecast pages in TSDB. Can provide TSDB-related information useful to organization (how/why data streams set up).",
        category: "Data Management"
      },
      {
        id: "8.5-tsdb-user-edits",
        title: "New Options for Editing TSDB User Edits",
        description: "Context menu when right-clicking User Value cells: Set new value(s) for cell(s), Adjust current value(s) for cell(s), Insert timestep, Insert multiple timesteps. New Cell Value and Adjust Cell(s) Value dialogs, Add Multiple Timesteps dialog.",
        category: "Data Management"
      },
      {
        id: "8.5-multiple-observed-streams",
        title: "Object Per Page Graphs Can Contain Multiple Observed Data Streams",
        description: "InfoWorks ICM can now display multiple observed data streams in Object Per Page custom graph (previously only first stream displayed).",
        category: "Visualization"
      },
      {
        id: "8.5-initial-conditions-2d-import-export",
        title: "Import and Export of Initial Conditions 2D",
        description: "Initial conditions can be imported from CSV files into new/existing Initial Conditions 2D objects, and exported from existing objects to CSV file.",
        category: "Data Management"
      },
      {
        id: "8.5-sim-id-statistical-reports",
        title: "Sim ID Included in Statistical Reports",
        description: "New Sim ID field containing database ID that uniquely identifies simulation now included in statistical reports. Identifier also included in exported CSV files.",
        category: "Results"
      },
      {
        id: "8.5-icm-exchange-meshing",
        title: "ICM Exchange Meshing Capability",
        description: "Now possible to perform meshing using ICM Exchange. Methods 'contains?', 'objects_in_polygons' and 'inside' can now be used on subcatchments.",
        category: "Tools"
      },
      {
        id: "8.5-rtc-editors-improvements",
        title: "RTC Editors Improvements",
        description: "Process of adding regulator in RTC window and RTC grid editors significantly improved, especially noticeable when editing large RTC.",
        category: "Tools"
      },
      {
        id: "8.5-block-spillage-method",
        title: "Block Spillage Method Available for Statistical Reports",
        description: "UK Environment Agency's 12 and 24 hour block spillage method can be used for calculating flow discharge statistics. New UK 12/24 block spill counting option on Statistic Template, results displayed in Statistical Report View grid.",
        category: "Results"
      },
      {
        id: "8.5-flood-sections",
        title: "Flood Sections for 2D Results Interrogation",
        description: "Ability to interrogate 2D results within 2D Mesh extended to include flood sections using Results Section type analysis object (previously known as 2D Result Line, renamed to reflect expanded purpose). Section Pick tool (formerly Reach Cross Section Pick) can display flood sections from Results Section on GeoPlan.",
        category: "Results"
      },
      {
        id: "8.5-complex-graphs-performance",
        title: "Quicker Opening of Complex Observed/Predicted Custom Graphs",
        description: "Opening of observed/predicted custom graphs now quicker in complex cases. Progress monitored and can be cancelled if required.",
        category: "Performance"
      },
      {
        id: "8.5-river-confluences-import",
        title: "River Confluences Imported from InfoWorks RS",
        description: "River confluences (RS junction nodes) can now be imported from InfoWorks RS into InfoWorks ICM as break nodes. River reaches connected to junction via connectivity link will be connected to break node corresponding to junction.",
        category: "Integration"
      },
      {
        id: "8.5-hecras-geometry-enhancements",
        title: "HEC-RAS Geometry Import and Export Enhancements",
        description: "HEC-RAS extended to include 2D modelling and shaped lateral banks. InfoWorks ICM HEC-RAS geometry import/export functions extended: Import Storage Area (2D), Land Cover Regions, BC Lines, Break Lines, Connections. Export 2D Zones, Roughness Zones, 2D Boundaries, General Lines, Base Linear Structures. X,Y coordinates for HEC-RAS Lateral Structures now imported/exported (curved lines now supported, not just straight lines).",
        category: "Integration"
      },
      {
        id: "8.5-swmm-v5.1.012",
        title: "Simulation Engine Updated to Support SWMM v5.1.012",
        description: "SWMM5 components in simulation engine updated to SWMM 5.1.0.12. Can import EPA SWMM v5.1.012 files using SWMM5 importer.",
        category: "SWMM"
      },
      {
        id: "8.5-blockages",
        title: "Blockages for Time-Varying Obstructions",
        description: "Blockage can model time-varying obstruction with user-defined contraction/expansion loss coefficients. Can be used in channel, conduit or river reach. Bridge blockage can be associated with bridge opening. Like other regulatory structures, blockage/bridge blockage can be used in RTC.",
        category: "Modeling"
      },
      {
        id: "8.5-overlapping-banks-boundaries",
        title: "1D and 2D Banks Overlapped by 2D Boundaries",
        description: "Overlapping banks now supported by 2D engine (CPU and GPU versions). When 1D/2D bank located on 2D boundary line, flow through overlapping faces calculated as sum of bank flow plus 2D boundary face flow (previously bank ignored, only 2D boundary considered).",
        category: "Modeling"
      },
      {
        id: "8.5-head-unit-flows-2d",
        title: "Head Unit Flows Associated with 2D Boundaries",
        description: "Can now apply level boundary condition combined with head/discharge relationship for 2D boundary. New boundary line type: Level & Head/discharge. Allows associating Head unit flow table to boundary. Profile in Level Event provides depth at boundary line, depth difference used to calculate head for each 2D element.",
        category: "Modeling"
      },
      {
        id: "8.5-permeable-zone-2d",
        title: "Transferring Infiltrated Volume - Permeable Zone (2D)",
        description: "New Permeable Zone (2D) object links infiltrated volume from 2D surface into 1D network (previously water lost through infiltration disappeared from model). Can model flow through permeable surfaces (SUDS structures) directed into drainage system. Drainage links visually represented on GeoPlan as arrows. Time varying and maxima/minima infiltration results in Permeable Zone (2D) Results on results grid.",
        category: "Modeling"
      },
      {
        id: "8.5-multi-barrel-links",
        title: "Multi Barrel Links",
        description: "Can specify how many identical, parallel channels/conduits connected between same upstream/downstream node. Alternative to defining identical parallel conduits/channels multiple times, improving efficiency and accuracy. New Number of barrels parameter for Channel/Conduit data fields. New conduits/channels default to 1. Only pipes with same barrel count can be merged. Simulation/storage calculations and numerical correction account for barrel count.",
        category: "Modeling"
      },
      {
        id: "8.5-headloss-coefficients-2d",
        title: "Headloss Coefficients for 2D Linear Structures",
        description: "Improved headloss setup for 2D linear structures (base, bridge, sluice). Can choose separate headloss coefficients for upstream/downstream elements or uniform coefficient for both directions. Can determine if headloss calculated on fixed basis (mesh dependent) or per unit length (practically mesh independent). New 'headloss' fields for Base, Bridge, Sluice linear structure (2D) properties. New Unit Headloss Coefficient (UHC) unit for per unit length specification. Old Headloss coefficient now Unit headloss coefficient.",
        category: "Modeling"
      },
      {
        id: "8.5-swmm5-rdii",
        title: "SWMM5 RDII Implementation Choice",
        description: "Can choose between SWMM5 RDII (Rainfall Derived Infiltration and Inflow) or pre-SWMM5 RDII implementation. New Use SWMM5 RDII option in simulation parameters. Unchecked for networks defined before release, checked by default for new networks. Must select Use SWMM5 RDII to use Monthly RTK Hydrographs. Must uncheck if multiple subcatchments with RTK hydrographs drain to same node.",
        category: "SWMM"
      },
      {
        id: "8.5-user-controls-modular-limits",
        title: "User Defined Controls - Modular Limits",
        description: "Modular limits can now be applied to user-defined controls. Uses upstream depth to determine flow in free/drowned conditions from specified head discharge table. Drowning factor applied to flow if downstream/upstream depth ratio exceeds modular limit.",
        category: "Modeling"
      },
      {
        id: "8.5-alternative-flow-units",
        title: "Alternative Units for Flow",
        description: "Four new display units added for flow: mega litres per day (Ml/day), mega litres per hour (Ml/hour), cubic meters per day (m3/day), cubic meters per hour (m3/hour).",
        category: "Usability"
      },
      {
        id: "8.5-resizable-sql-dialog",
        title: "Resizable SQL Dialog",
        description: "SQL dialog now resizable, edit area for expression expands with dialog. Does not apply to TVD connector and theme expressions (SQL area remains fixed size).",
        category: "Usability"
      },
      {
        id: "8.5-australian-rainfall-2016",
        title: "Design Rainfall Generators - Australian Rainfall (2016)",
        description: "New design rainfall generator using ARR Storm Generator to generate design rainfall ensembles based on ARR (2016) guidance. Obtains data from ARR website and Bureau of Meteorology (BOM) website. Individual design events can be selected or ensemble of AEPs and durations constructed for simulation. Previous Australian Rainfall option renamed to Australian Rainfall (1987), existing models not affected.",
        category: "Hydrology"
      }
    ]
  },
  {
    id: "8.0",
    version: "8.0",
    releaseDate: "2017-05-01",
    features: [
      {
        id: "8.0-tsdb-data-sources",
        title: "New TSDB Data Sources: PI Web API and EA Rest API",
        description: "Scalar TSDB data adaptor connects to PI or EA databases via PI Web API and EA Rest API application interfaces. UTC import for telemetry from PI, ClearSCADA, iHistorian fixing summer time offset issues.",
        category: "Data Management"
      },
      {
        id: "8.0-tvd-spatial-rainfall",
        title: "TVD Connectors for Average Spatial Rainfall Queries",
        description: "Create TVD connector with polygon geometry containing averaged spatial rainfall results from spatial TSDBs. Polygon can be located outside existing network with graph/grid result display.",
        category: "Data Management"
      },
      {
        id: "8.0-import-export-enhancements",
        title: "Import/Export Enhancements",
        description: "Ground model grid export to ESRI ASCII raster. Import multiple generic CSV files into single rainfall event. Enhanced CSV TVD import with cell-based profile naming and relative times support for rainfall events/flow surveys.",
        category: "Data Management"
      },
      {
        id: "8.0-custom-graphs-enhancements",
        title: "Custom Graph Properties and X Axis Pages",
        description: "New Properties page for Y-axis/parameters (attributes, titles, min/max values) and X Axis page for X-axis parameters (days/time, autoscale, axis colour). Edit all custom graph aspects directly in Custom Graph View. Current selections button for active network objects.",
        category: "Visualization"
      },
      {
        id: "8.0-sql-enhancements",
        title: "SQL Function and River Reach Cross Section Queries",
        description: "New LOOKUPFN stepwise/piecewise linear list function for time series. New river_section field type enabling SQL queries for river reach sections (combined with sim/tsr results). SQL themes support for text string/date results. Enhanced scenario notes navigation (Previous/Next buttons).",
        category: "Development"
      },
      {
        id: "8.0-flow-direction-visualization",
        title: "Flow Direction Visualization and Results",
        description: "Layer Theme Editor Direction range setting and Arrow angle attribute for 2D results. New flow direction summary results: MAXANGLE2D, MINANGLE2D, MAXHAZANGLE2D, MAXDEPTHANGLE2D, MAXVELDEPTHANGLE2D, MAXHAZSPEED2D, MAXHAZDEPTH2D. ANGLER unit type in degrees (not just radians).",
        category: "Visualization"
      },
      {
        id: "8.0-turbulence-modeling",
        title: "Turbulence Modeling for 2D Simulations",
        description: "Eddy viscosity modeling during 2D simulations. Turbulence Model (2D) associated with 2D Zones and Turbulence Zones (2D). Boundaries as break lines for triangulation. Time varying eddy viscosity results in 2D Zone and network results point (2D) results.",
        category: "Modeling"
      },
      {
        id: "8.0-green-ampt-infiltration",
        title: "Green-Ampt Infiltration for 2D Simulations",
        description: "Green-Ampt infiltration modeling in 2D. Infiltration Surface (2D) GreenAmpt type with suction/conductivity/deficit parameters. Modified 2D initial conditions with Green-Ampt soil moisture deficit. Time varying results for deficit, moisture content, drain time, saturation flag.",
        category: "Modeling"
      },
      {
        id: "8.0-groundwater-enhancements",
        title: "Groundwater and Infiltration Enhancements",
        description: "Ground infiltration profiles for time-varying events using Profile Properties or Ground infiltration record. New 'Node level affects groundwater' simulation parameter for destination node surcharge influence. Monthly evapotranspiration factors for groundwater model. Evaporative loss linear/constant options with new parameters.",
        category: "Modeling"
      },
      {
        id: "8.0-sediment-river-reach",
        title: "River Reach Sediment Depth and Net Deposition",
        description: "Calculate sediment depth and net deposition per river reach section during simulation. Net deposition for Uniform bed updating. Renamed parameters: Bed offset → Section bed offset, Reach chainage → Section reach chainage.",
        category: "Results"
      },
      {
        id: "8.0-2d-modeling-improvements",
        title: "2D Modeling Improvements",
        description: "Ground slope term correction for steep slope calibration (constant slope vs discontinuous step). Infiltration zones no longer require infiltration surface association. 2D network result lines fully supported at 2D Zone boundaries. Cumulative flooding (TWODQCUMFLOOD) for 2D nodes in RPA/Flood Volume/Worst Case reports.",
        category: "Modeling"
      },
      {
        id: "8.0-siphon-transitional-flow",
        title: "Siphon Transitional Flow Regime",
        description: "Hood soffit level parameter for siphons enabling transitional flow regime implementation as siphon becomes primed.",
        category: "Modeling"
      },
      {
        id: "8.0-suds-enhancements",
        title: "SUDS/LID Model Enhancements",
        description: "Rain gardens require Seepage rate specification. Vegetative swales require Berm height >0. Revised infiltration/liner calculations for SUDS pond nodes using realistic segment-based side area calculation (replacing trapezoidal integral).",
        category: "Modeling"
      },
      {
        id: "8.0-rtk-hydrograph-swmm5",
        title: "RTK Hydrograph SWMM5 Import Extension",
        description: "Extended RDK hydrograph SWMM5 import including maximum initial abstraction depths, recovery rates, and UH response depths (short/intermediate/long-term). RTK monthly profiles import from SWMM5 or Monthly RTK hydrograph object with ID-based override.",
        category: "Integration"
      },
      {
        id: "8.0-daylight-saving-support",
        title: "Daylight Saving Time Support",
        description: "Waste water and trade waste events account for local time changes (TSDB runs). RTC objects support daylight saving via Local Clock Time (LCT) and Local Clock Time Repeat (LCTR) ranges for regulatory structures (pumps, weirs).",
        category: "Modeling"
      },
      {
        id: "8.0-evaporation-profiles",
        title: "Evaporation Profiles for Subcatchments",
        description: "Evaporation profiles now separate subcatchment parameter (previously only associated with rainfall profiles).",
        category: "Hydrology"
      },
      {
        id: "8.0-swmm5-export-enhancement",
        title: "SWMM5 Export Non-Numeric Rainfall Profiles",
        description: "Non-numeric rainfall profile IDs exported to Raingage field when exporting subcatchments to SWMM5 files.",
        category: "Integration"
      },
      {
        id: "8.0-rtc-editor-performance",
        title: "RTC Editor Performance Improvements",
        description: "Significantly improved processing performance for RTC window and grid editors, especially noticeable with large RTCs. Progress bar displayed when updating real-time control parameters for regulator structures.",
        category: "Performance"
      },
      {
        id: "8.0-orifice-diameter-flexibility",
        title: "Orifice Diameter Flexibility",
        description: "Orifice diameters can be set below 100mm. Validation warning issued for orifices smaller than 0.01m.",
        category: "Modeling"
      },
      {
        id: "8.0-trace-titles-custom-graphs",
        title: "Trace Titles for Observed/Predicted Custom Graphs",
        description: "Edit trace titles for predicted events in Observed/Predicted custom graphs via Trace Style dialog (Trace Properties button on Custom Graph View Layout page).",
        category: "Visualization"
      },
      {
        id: "8.0-differential-snapshot-handling",
        title: "Differential Snapshot Renamed Object Handling",
        description: "Importing differential snapshot files handles renamed objects with reference to previous ID.",
        category: "Data Management"
      },
      {
        id: "8.0-workgroup-database-versions",
        title: "Workgroup Database Versions Display",
        description: "Open Master Database dialog displays version numbers of workgroup databases available on host machine with product version in brackets.",
        category: "Administration"
      }
    ]
  },
  {
    id: "7.5",
    version: "7.5",
    releaseDate: "2016-11-01",
    features: [
      {
        id: "7.5-pdm-calibration",
        title: "PDM Automatic Calibration",
        description: "Automatic calibration of PDM Descriptor parameters for subcatchment runoff modeling using TSDB-supplied observed data via Nelder-Mead simplex minimization procedure.",
        category: "Hydrology"
      },
      {
        id: "7.5-refh-baseflow-scaling",
        title: "ReFH Initial Baseflow Subcatchment Scaling",
        description: "ReFH initial baseflow scaled proportionally to subcatchment area (not catchment). Options for Profile Properties, Rainfall Generator, and global settings with subcatchment-specific precedence via ReFH Subcatchment tab.",
        category: "Hydrology"
      },
      {
        id: "7.5-risk-analysis-export",
        title: "Risk Analysis Results Export",
        description: "Export results from risk analysis simulations and risk analysis result objects to GIS format files or via Open Data Export Centre.",
        category: "Results"
      },
      {
        id: "7.5-risk-analysis-sql",
        title: "Risk Analysis in SQL Selections",
        description: "Include risk analysis simulation and result object data in SQL queries via new 'risk' Field Type option for loaded GeoPlan networks.",
        category: "Development"
      },
      {
        id: "7.5-enhanced-3d-view",
        title: "Enhanced 3D Network View",
        description: "Improved performance and visual representation with realistic water/sky rendering. Displays whole network instead of restriction to currently-open GeoPlan area.",
        category: "Visualization"
      },
      {
        id: "7.5-piers-editor",
        title: "Improved Piers Editor Usability",
        description: "Bridge pier location/geometry editor enhanced with Pier ID selection list and graph display of selected Pier ID points.",
        category: "Usability"
      },
      {
        id: "7.5-refh-volume-conservation",
        title: "ReFH Runoff Model Volume Conservation",
        description: "Water balance closure method (Wallingford Hydro Solutions) modifying ReFH baseflow calculation to phase out direct runoff component contribution. ReFH remains event-based (not continuous).",
        category: "Modeling"
      },
      {
        id: "7.5-subcatchment-population-warnings",
        title: "Subcatchment Population Value Warnings",
        description: "HTML log file warnings for subcatchments with likely incorrect population values from address/census data due to invalid geometry. Supports Insert Vertices and spur removal corrections.",
        category: "Data Management"
      },
      {
        id: "7.5-job-progress-2d",
        title: "Enhanced Job Progress Window for 2D Runs",
        description: "New fields providing progress information for 2D zone elements during simulations in Job Progress Window.",
        category: "Usability"
      },
      {
        id: "7.5-damage-function-enhancements",
        title: "Damage Function Grid Editor Enhancements",
        description: "Generate multiple damage curves per receptor with different periods (start/end dates), up to 4 curves per period, linear/stepped interpolation methods, and up to 10 velocity-dependent curves in Damage Function Graph Dialog.",
        category: "Modeling"
      },
      {
        id: "7.5-insert-vertices-intersections",
        title: "Insert Vertices at Intersections",
        description: "New Geometry option automatically inserting vertices where polygon object boundaries (subcatchments, network polygons) intersect with GIS or network polygon objects.",
        category: "Tools"
      },
      {
        id: "7.5-geometry-simplification",
        title: "Enhanced Object Geometry Simplification",
        description: "Polygon thinning with spur removal (regions narrower than specified width) and area constraint ensuring polygons aren't over-thinned by reinstating vertices when area change exceeds limits.",
        category: "Tools"
      },
      {
        id: "7.5-feh2013-rainfall",
        title: "FEH2013 Design Rainfall Generator",
        description: "Generate rainfall events from Flood Estimation Handbook web service XML downloads via ReFH2 application (Wallingford HydroSolutions) producing appropriate rainfall hyetographs. Requires FEH web service access and ReFH2 license.",
        category: "Hydrology"
      },
      {
        id: "7.5-live-tsdb-alerts",
        title: "Alerts on Live TSDB Data",
        description: "Alert on real-time TSDB data (not just TVD connector results). New 'live_data' choice in Target field A/B for Alert Definition List extracting data when alert engine runs.",
        category: "Data Management"
      },
      {
        id: "7.5-tsdb-formats",
        title: "New Spatial TSDB Data Formats",
        description: "Binary grid format for observed/forecast data with Raw Binary File Configuration. FURUNO GRIB2 radar format support. Shanghai Met (forecast) radar format option.",
        category: "Data Management"
      },
      {
        id: "7.5-tide-sql-expression",
        title: "TIDE SQL Expression for TVD Connectors",
        description: "New SQL expression for TVD connectors calculating tidal harmonics during simulation runs via TVD Connector SQL Expression Dialog.",
        category: "Development"
      },
      {
        id: "7.5-2d-depths-coordinates",
        title: "2D Depths in Coordinates Panel",
        description: "GeoPlan Properties/Theme Visual tab option displaying 2D depths in Coordinates Panel on Status Bar when simulation results opened.",
        category: "Visualization"
      },
      {
        id: "7.5-suds-lid-enhancements",
        title: "SUDS/LID Simulation Enhancements",
        description: "SWMM SUDS/LID text report with control/performance summaries and SWMM5 errors. Water quality support (SWMM WQ LIDs component). Drain flow included in time-varying and non-time-varying subcatchment results.",
        category: "Modeling"
      },
      {
        id: "7.5-geodatabase-odic",
        title: "Geodatabase Import via ODIC",
        description: "Import Geodatabase tables using Open Data Import Centre (ODIC).",
        category: "Integration"
      },
      {
        id: "7.5-sql-array-flags",
        title: "Array Field Flags in SQL Queries",
        description: "Use data flags on array fields (e.g., river section data) in SQL queries.",
        category: "Development"
      },
      {
        id: "7.5-flood-contour-export",
        title: "Batch Export of Maximum Flood Contours",
        description: "Export maximum flood contours from multiple simulations to MapInfo MIF/TAB or ESRI Shape/ASCII Grid files via Results menu.",
        category: "Results"
      },
      {
        id: "7.5-template-network",
        title: "Template Network Support",
        description: "Define existing networks as templates (specific version or always latest). New networks based on template inherit all network objects from template at creation.",
        category: "Administration"
      },
      {
        id: "7.5-sediment-log-data",
        title: "Sediment Data in Run Log Files",
        description: "Summary sediment results in log files: cumulative mass balance, balance per fraction, deposit/initial/final bed levels per river section, and material sizes (multi-fraction models).",
        category: "Results"
      },
      {
        id: "7.5-gpu-multi-simulations",
        title: "Multiple Simulations Per GPU Card",
        description: "Run multiple simulations simultaneously on same GPU card (previously one per card). Job Agent automatically assigns simulations to cards with fewest assignments. Configurable via Agent Options Custom settings.",
        category: "Performance"
      },
      {
        id: "7.5-gpu-wq-diffusion",
        title: "GPU Water Quality Diffusion for 2D Engine",
        description: "GPU card support for 2D Water Quality Diffusion calculations via 2D Parameters dialog options.",
        category: "Water Quality"
      },
      {
        id: "7.5-conveyance-highlighting",
        title: "User-Defined Conveyance Data Highlighting",
        description: "River reach cross-sections with user-defined conveyance values displayed in bold in Conveyance Data Editor Sections list.",
        category: "Usability"
      },
      {
        id: "7.5-statistical-reports-version",
        title: "Network Version Numbers in Statistical Reports",
        description: "Statistical reports now include network version numbers for tracking and documentation.",
        category: "Results"
      },
      {
        id: "7.5-sql-nearest-option",
        title: "SQL Spatial Search Nearest Option",
        description: "New 'Nearest' option in SQL spatial searches finding nearest single object of selected type within specified distance.",
        category: "Development"
      },
      {
        id: "7.5-property-editor-features",
        title: "Object Property Editor Usability Improvements",
        description: "Return key invokes dialogs (Notes, Hyperlinks) instead of Ellipsis button. 'Open all groups' and 'Close all groups' popup menu options for expanding/contracting field groups.",
        category: "Usability"
      },
      {
        id: "7.5-alternative-coordinate-system",
        title: "Set Alternative Coordinate System",
        description: "Renamed from 'Set online map projection' for clarity. Specify online map projection system for databases without map control to enable online maps.",
        category: "Integration"
      }
    ]
  },
  {
    id: "7.0",
    version: "7.0",
    releaseDate: "2016-05-01",
    features: [
      {
        id: "7.0-1d-diffusion",
        title: "1D Diffusion for Water Quality",
        description: "1D simulation engine now supports diffusion of determinants along pre-determined links (river reaches, bridges, channels, conduits) after advection calculation, with estuary or river condition options.",
        category: "Water Quality"
      },
      {
        id: "7.0-gpu-water-quality",
        title: "GPU 2D Engine Water Quality Support",
        description: "GPU 2D Engine now supports water quality processes (built-in and user-defined) and water quality decay pollutants.",
        category: "Water Quality"
      },
      {
        id: "7.0-geocoding",
        title: "Third-Party Geocoding Services",
        description: "Find addresses within InfoWorks ICM using web map applications from Google, Bing, or Nomination provider via Online Find Options (Geocoding) and GeoPlan Find/Go To XY Coordinates tools.",
        category: "Integration"
      },
      {
        id: "7.0-tsdb-alphanumeric",
        title: "Alphanumeric Time Series Data in TSDB",
        description: "Define lookup tables mapping alphanumeric text from imported time varying data into numerical values recognized by InfoWorks ICM, assignable to relevant TSDB data streams.",
        category: "Data Management"
      },
      {
        id: "7.0-clark-routing",
        title: "Clark Runoff Routing Model",
        description: "Clark routing model using Clark unit hydrograph method now available for subcatchments, extending runoff routing model choices for rainfall drainage timing.",
        category: "Hydrology"
      },
      {
        id: "7.0-groundwater-routing",
        title: "Separate Groundwater and Runoff Drainage Destinations",
        description: "SWMM5 functionality allowing different destinations for groundwater and runoff in subcatchments with ground infiltration objects. Groundwater can flow to different node than runoff.",
        category: "Hydrology"
      },
      {
        id: "7.0-subcatchment-drain-to",
        title: "Simplified Subcatchment Drainage Destination",
        description: "New 'Drain to' field simplifies drainage destination specification by choosing object type with only applicable fields enabled for that type.",
        category: "Usability"
      },
      {
        id: "7.0-subcatchment-navigation",
        title: "Navigate to Subcatchment Drainage Destinations",
        description: "'To associated object' navigation option displays properties for subcatchment's drainage destination, enhancing object relationship navigation.",
        category: "Usability"
      },
      {
        id: "7.0-node-rainfall-display",
        title: "Rainfall Display for Nodes Connected to 2D Elements",
        description: "Nodes connected to 2D elements without associated subcatchments now show rainfall hyetograph for associated 2D element on pick graphs.",
        category: "Visualization"
      },
      {
        id: "7.0-arcgis-10-4",
        title: "ArcGIS 10.4 Support",
        description: "Support for ArcGIS version 10.4 when using ArcGIS Engine/ArcGIS Desktop map control.",
        category: "Integration"
      },
      {
        id: "7.0-horizontal-scrolling",
        title: "Horizontal Scrolling in Long Section Views",
        description: "Ctrl+Page Up (scroll left) and Ctrl+Page Down (scroll right) keyboard shortcuts for horizontal scrolling in long section views.",
        category: "Usability"
      },
      {
        id: "7.0-conveyance-editor",
        title: "User-Definable Conveyance Data Editor",
        description: "New Conveyance Data Editor for specifying user-definable conveyance data for river reaches. Type values or copy/edit calculated conveyance data, saved as user-defined data used in preference to calculated data.",
        category: "Tools"
      },
      {
        id: "7.0-gpu-performance",
        title: "GPU Engine Performance Improvements",
        description: "GPU engine processing time approximately 40% faster than Version 6.5 (model/machine dependent). Simulation compilation time unchanged.",
        category: "Performance"
      },
      {
        id: "7.0-tvd-sql-expressions",
        title: "SQL Expressions for TVD Connectors",
        description: "Add SQL expressions to TVD connectors for transforming TSDB data into model-appropriate values via TVD Connector SQL Expression Dialog.",
        category: "Development"
      },
      {
        id: "7.0-find-improvements",
        title: "Database Find Improvements",
        description: "Faster database item finding with new 'Match whole field' option limiting search extent and reversed search criteria order.",
        category: "Usability"
      },
      {
        id: "7.0-refh-c-results",
        title: "REFH_C Soil Moisture Content Results Attribute",
        description: "New 'REFH_C' results attribute showing soil moisture content value used in ReFH model simulations, distinguishing state file usage differences.",
        category: "Results"
      },
      {
        id: "7.0-find-column",
        title: "Find Column in Grid",
        description: "Find Column In Grid Dialog accessible via column header context menu for easier column location in grid tables with drop-down selection.",
        category: "Usability"
      }
    ]
  },
  {
    id: "6.5",
    version: "6.5",
    releaseDate: "2015-11-01",
    features: [
      {
        id: "6.5-tsdb-enhancements",
        title: "TSDB Script Support and Batch CSV",
        description: "Run scripts before TSDB update for third-party models, data manipulation, and FTP retrieval. New Batch CSV data source type for importing multi-column CSV files into scalar TSDBs with archive folder and daily logging.",
        category: "Data Management"
      },
      {
        id: "6.5-suds-lid-modeling",
        title: "SUDS/LID Structures Modeling in Subcatchments",
        description: "Based on SWMM 5.1.010, model Sustainable Urban Drainage (SUDS) / Low Impact Development (LID) structures (permeable pavements, reed beds) with SUDS Controls objects defining outflow modeling parameters. Import via SWMM5 text file or define manually.",
        category: "Hydrology"
      },
      {
        id: "6.5-subcatchment-enhancements",
        title: "Advanced Subcatchment Routing Capabilities",
        description: "Subcatchments can drain laterally to multiple links (for rural areas/river reaches), drain to another subcatchment (for SUDS/LID cascading), and route between pervious/impervious surfaces within same subcatchment with proportion control.",
        category: "Hydrology"
      },
      {
        id: "6.5-conveyance-graph",
        title: "Conveyance Graph Pick Tool",
        description: "New GeoPlan tool displaying conveyance vs elevation graphs for river reach/bridge cross-sections, verifying monotonically increasing curves and comparing neighboring sections via Conveyance Graph Properties Dialog.",
        category: "Visualization"
      },
      {
        id: "6.5-rainfall-import-export",
        title: "Improved Rainfall Event Import/Export",
        description: "Simplified multi-file TVD import (Rainfall, Temperature, Wind, Evaporation, Solar Radiation, Soil Moisture Deficit) into single event. Export creates separate CSV per TVD type.",
        category: "Data Management"
      },
      {
        id: "6.5-display-improvements",
        title: "Section Display Improvements",
        description: "Removed undesirable 'stepping' effect in Flooding Section Window and Long Section Window for slopes with no water level, improving visual clarity for ground model rendering.",
        category: "Visualization"
      },
      {
        id: "6.5-version-control-features",
        title: "Version Control and Recycle Bin Enhancements",
        description: "Copy networks without commit history (preserving scenarios). RTC Editor 'Find Regulator in List' search. Recycle Bin 'Restore all' option for bulk database item restoration.",
        category: "Version Control"
      },
      {
        id: "6.5-custom-graphs-regulators",
        title: "Regulator Attributes in Custom Graphs",
        description: "Object Per Page and Simulation Per Page Reports support regulator state (opening, flow, depth above min), pump state, and variable speed attributes on graph axes.",
        category: "Visualization"
      },
      {
        id: "6.5-ui-usability",
        title: "UI and Usability Improvements",
        description: "Lock toolbar positions to prevent accidental movement. GeoPlan tools menu consolidation. Edit flags accessible from Tools menu. GIS Layer Control simultaneous editing for multiple layers (Visible, Selectable, Editable, Zoom Levels, Properties).",
        category: "Usability"
      },
      {
        id: "6.5-validation-performance",
        title: "2D Network Validation Performance",
        description: "Improved validation process significantly increasing speed of 2D network validation checks.",
        category: "Performance"
      },
      {
        id: "6.5-damage-receptor-threshold",
        title: "Damage Receptor Threshold Height",
        description: "New Threshold height field representing floor levels higher/lower than ground level for properties, used to calculate maximum depth for risk analysis when actual floor levels unavailable.",
        category: "Modeling"
      },
      {
        id: "6.5-multi-simulation-gis-export",
        title: "Multi-Simulation GIS Export",
        description: "Export results from multiple simulations to MIF, SHP, TAB, or Geodatabase formats via new Results menu 'Export to GIS' option, replacing single-simulation limitation.",
        category: "Integration"
      },
      {
        id: "6.5-sql-enhancements",
        title: "SQL Date Formatting and Prompt Enhancements",
        description: "New DATEFORMAT(), TIMEFORMAT(), and DATETIMEFORMAT() functions for datetime field display. SQL PROMPT TITLE and PROMPT LINE commands now accept variables as arguments.",
        category: "Development"
      },
      {
        id: "6.5-tuflow-import",
        title: "TUFLOW Network Import Support",
        description: "Import TUFLOW network data (1D) using MapInfo Interchange File (MIF) format files.",
        category: "Integration"
      },
      {
        id: "6.5-sud-lid-rivers",
        title: "SUD/LID Structures in River Reaches and Bridges",
        description: "Database fields for Sustainable Urban Drainage/Low Impact Development structures (permeable pavements, vegetative swales) in river reaches and bridge expansions/contractions with base height and infiltration loss coefficients.",
        category: "Modeling"
      },
      {
        id: "6.5-refh2-support",
        title: "ReFH2 Rainfall Runoff Model Integration",
        description: "Interface with ReFH2 from Wallingford HydroSolutions for catchment descriptor parameter calculation in subcatchments and initial conditions (soil moisture, baseflow) in rainfall events. Choice between ReFH, ReFH2, or user-specified values.",
        category: "Hydrology"
      },
      {
        id: "6.5-2d-line-sources",
        title: "2D Line Source Objects",
        description: "Inject inflow through lines (not just points) within 2D Zones as flow-time boundaries distributed along lines. Included in meshing as break lines with discharge to containing mesh elements.",
        category: "Modeling"
      },
      {
        id: "6.5-river-bank-behavior",
        title: "Improved River Bank Behavior with 2D Meshes",
        description: "Enhanced bank level raising algorithm inserting vertices within engine to respect specified bank levels except when below mesh, avoiding artificial flow generation.",
        category: "Modeling"
      },
      {
        id: "6.5-1d-2d-linking-extension",
        title: "Extended 1D/2D Linking Method Application",
        description: "Inflow-based linking method (v6.0 for head discharge tables) now extended to all types of node-to-2D zone linkage via 'Inflow-based node-2d link at manholes' parameter (renamed from original).",
        category: "Modeling"
      },
      {
        id: "6.5-csv-importer-enhancement",
        title: "Generic CSV Time-Varying Data Importer Enhancement",
        description: "Improved CSV importer for rainfall and inflow: multiple columns imported as multiple profiles within single object (not separate objects).",
        category: "Data Management"
      },
      {
        id: "6.5-node-level-elevations",
        title: "Node-Level 2D Elevation Configuration",
        description: "Use elevations (instead of depths) for water exchange calculation at individual nodes rather than network-wide, addressing ground level discrepancy and oscillating flows.",
        category: "Modeling"
      },
      {
        id: "6.5-2d-summary-log",
        title: "Improved 2D Volume Balance Summary",
        description: "Enhanced 2D summary log with itemized inflows/outflows/net inflows by category, percentages, and volume balance error percentage based on sum of inflows and outflows.",
        category: "Results"
      },
      {
        id: "6.5-upm-tool",
        title: "Urban Pollution Management (UPM) Tool",
        description: "UPM tool from InfoWorks CS implemented in ICM for easier InfoWorks CS to ICM model conversion.",
        category: "Integration"
      },
      {
        id: "6.5-wms-enhancements",
        title: "WMS Enhancements for MapXtreme",
        description: "Web Mapping Service layer control with Map Image Format, Background Colour, and Transparent properties. Automatic display in GeoPlan coordinate system without additional TAB files.",
        category: "Integration"
      }
    ]
  },
  {
    id: "6.0",
    version: "6.0",
    releaseDate: "2015-04-01",
    features: [
      {
        id: "6.0-river-sediment",
        title: "Sediment Modeling in River Reaches",
        description: "Comprehensive sediment transport modeling with Sediment Grading objects, three-layered bed composition (active/deposited/parent), active layer depth methods (Explicit, D50, D90), erosion/deposition rate limits, bed level erosion limits, deposition depth limits, and bed updating methods (Invert, Uniform).",
        category: "Water Quality"
      },
      {
        id: "6.0-sediment-initial-conditions",
        title: "1D Initial Conditions for Sediment",
        description: "Initial Conditions 1D Editor updated to include sediment masses for river reaches, with additional water quality results for river reach and bridge objects.",
        category: "Modeling"
      },
      {
        id: "6.0-velocity-profile-report",
        title: "Velocity Profile Grid Report",
        description: "Detailed breakdown of flow, bulk velocity, and wetted area for river reaches at each timestep, provided for sections and individual panels with grid view and CSV export.",
        category: "Results"
      },
      {
        id: "6.0-custom-statistics-columns",
        title: "Custom Columns in Statistical Reports",
        description: "Define additional columns in Statistics Templates for descriptive text (e.g., CSO Number, Permit ID) in Statistical Reports.",
        category: "Results"
      },
      {
        id: "6.0-rs-bridge-import",
        title: "InfoWorks RS Bridge Import and Ground Model Sampling",
        description: "Enhanced RS importer generating ICM bridge objects from RS bridge data. Bridge Linear Structure (2D) objects with irregular invert level now updateable from ground model with vertex insertion and linear interpolation.",
        category: "Integration"
      },
      {
        id: "6.0-river-reach-sections-grid",
        title: "Long Section River Reach Sections Grid",
        description: "Display grid view of river reach sections from Long Section Window showing information for all sections currently displayed.",
        category: "Visualization"
      },
      {
        id: "6.0-export-enhancements",
        title: "Export and Data Field Enhancements",
        description: "MXD file export option for ESRI ArcMap format. User Text and User Number fields increased from five to ten of each type for expanded user-defined data storage.",
        category: "Integration"
      },
      {
        id: "6.0-validation-improvements",
        title: "Validation Improvements",
        description: "Inline bank validation ensuring 2D Zone ID specified banks connect to Outfall nodes. Significant efficiency improvements for 2D mesh zones and associated objects validation.",
        category: "Data Management"
      },
      {
        id: "6.0-gis-export-performance",
        title: "GIS Export Performance for 2D Elements",
        description: "Significant efficiency improvements reducing export time for 2D meshes with large numbers of elements.",
        category: "Performance"
      },
      {
        id: "6.0-flow-limiting-results",
        title: "Enhanced Flow Limiting Results at 2D Nodes",
        description: "New results fields for 2D inlets: Total cumulative limited volume, Cumulative limited volume (timestep), and Cumulative limited volume rate for identifying capping procedure severity.",
        category: "Results"
      },
      {
        id: "6.0-1d-2d-linking",
        title: "Improved 1D/2D Network Linking Method",
        description: "New 'Inflow-based link at manholes' simulation parameter using net inflow (instead of element volume) for maximum flow exchange, reducing head/inflow discrepancies for nodes in small elements. Enabled by default for new networks.",
        category: "Modeling"
      },
      {
        id: "6.0-2d-sediment-rates",
        title: "2D Suspended Sediment Erosion/Deposition Rate Limits",
        description: "Water Quality and Sediment Parameters now support maximum erosion and deposition rates for 2D suspended sediment transport with per-fraction or composite limitations.",
        category: "Water Quality"
      },
      {
        id: "6.0-2d-elevation-results",
        title: "Elevation Results for 2D Network Results Objects",
        description: "New water elevation results for Network Results Line (2D) and Polygon (2D): Highest/Lowest elevation, Maximum highest elevation, Minimum lowest elevation in results grids and property sheets.",
        category: "Results"
      },
      {
        id: "6.0-sql-time-series",
        title: "Time Varying Results in SQL Expressions",
        description: "SQL queries can analyze results across simulation timesteps using tsr (time series result) prefix with aggregate functions. Usable in GIS Export of SQL expressions for 2D mesh elements.",
        category: "Development"
      },
      {
        id: "6.0-display-improvements",
        title: "Results Display Improvements",
        description: "Unset elevations displayed as null in grids (not large negative numbers) and not shown on graphs. Missing TVD connector results displayed as blanks (not zeros) with gaps in graph traces and -9998 in CSV export.",
        category: "Usability"
      },
      {
        id: "6.0-initial-state-sediment",
        title: "Initial State Simulations with Sediment Support",
        description: "Initial state simulations now include bed sediment data in state files for 2D sediment transport initial conditions.",
        category: "Modeling"
      },
      {
        id: "6.0-structure-flow-engine",
        title: "Structure Flow Engine Enhancement",
        description: "Improved weir/orifice flow switching for structures (orifice, weir, sluice, siphon, screen) selecting lower flow mode above structure height, reducing discontinuities and potentially decreasing simulation times significantly.",
        category: "Performance"
      },
      {
        id: "6.0-choice-lists-merge",
        title: "Choice Lists Merging Enhancement",
        description: "Copy and paste choice lists separately from other preferences with 'Paste choice lists (merge)' option. Network choice lists copiable to database choice lists and vice versa.",
        category: "Administration"
      },
      {
        id: "6.0-object-browser",
        title: "Object Browser Window for InfoAsset Manager",
        description: "New docking window for inspecting object relationships in InfoAsset Manager networks with tree view, context menu for properties/commit history/GeoPlan find/object creation.",
        category: "Visualization"
      },
      {
        id: "6.0-multi-gpu",
        title: "Multi-GPU Support for 2D Engine",
        description: "2D engine runs on multiple GPU cards in parallel (one simulation per card) for GPU clusters and desktop machines. Engine selects card based on highest free memory with GPUUSE/GPUAVOID/GPUANY keywords via Agent Options Dialog.",
        category: "Performance"
      },
      {
        id: "6.0-web-mapping",
        title: "Integration with Web Mapping Software",
        description: "'View online' GeoPlan context menu option integrating Google Maps, Google Street View, Bing, OpenStreetMap, and user-defined URLs. Online Map Options Dialog configures available services. Set Online Maps Projection for projectionless networks.",
        category: "Integration"
      },
      {
        id: "6.0-ui-usability",
        title: "GeoPlan and Grid Usability Enhancements",
        description: "'Only show displayed layers' option for GeoPlan Layers/Themes grid. Hide specific tabs in Network Object Grid Windows via context menu. SQL Results Grids share selections with GeoPlan/Long Section Windows.",
        category: "Usability"
      },
      {
        id: "6.0-sql-editor-limit",
        title: "SQL Editor Character Limit Increase",
        description: "SQL Dialog editor character limit increased from 32,768 to 2 billion characters for longer queries.",
        category: "Development"
      },
      {
        id: "6.0-tsdb-improvements",
        title: "TSDB Enhancements",
        description: "External database connection displays dropdown list of available source tables/columns in TSDB grid cells. Spatial TSDB now supports NetCDF as observed or forecast radar data file format.",
        category: "Data Management"
      },
      {
        id: "6.0-infinity-system",
        title: "Infinity System Configuration Objects",
        description: "New database items in Model Group for CSO monitoring and reporting in Infinity System, containing ICM runs, statistics templates, and model group items.",
        category: "Integration"
      },
      {
        id: "6.0-agent-enhancements",
        title: "ICM Agent Robustness Improvements",
        description: "Enhanced Agent service robustness under heavy load with multiple simultaneous requests, reducing failed simulations from state/results upload errors.",
        category: "Administration"
      }
    ]
  },
  {
    id: "5.5",
    version: "5.5",
    releaseDate: "2014-11-01",
    features: [
      {
        id: "5.5-wq-defaults",
        title: "Water Quality Simulation Parameter Defaults Updated",
        description: "Default QM Parameters changed to reflect recommended usage: 'Erosion/deposition affects hydraulics' and 'Native washoff routing' now checked by default for new runs, feeding variable sediment depth to hydraulic model and using hydraulic runoff routing for washoff calculations.",
        category: "Water Quality"
      },
      {
        id: "5.5-ascii-flood-contours",
        title: "Export Flood Contours to ASCII Grid Format",
        description: "Flood contours now exportable to ESRI ASCII grid (.ASC) format in addition to ESRI .SHP and MapInfo .MIF/.TAB formats via Results menu.",
        category: "Integration"
      },
      {
        id: "5.5-mesh-level-zones",
        title: "Mesh Level Zones",
        description: "New 2D modeling object for dividing 2D Zones into regions with modified mesh element elevations based on ground model or user-defined values, providing greater flexibility than Mesh Zones for detailed representation of roads and embankments.",
        category: "Modeling"
      },
      {
        id: "5.5-risk-impact-zones",
        title: "Risk Impact Zones",
        description: "New network object aggregating risk results from damage receptors into geographical areas for area-based risk analysis. Includes annual damage results, CSV export, and grid view reports for Risk Analysis Results objects.",
        category: "Modeling"
      },
      {
        id: "5.5-2d-node-flooding",
        title: "2D Node Flooding and Flow Limiting Results",
        description: "New results fields for 2D nodes: flooding onto 2D zone (time varying, max, cumulative), duration of flow limiting, and flow limited indicator for identifying 2D/1D exchange capping locations at inlets.",
        category: "Results"
      },
      {
        id: "5.5-inundation-area",
        title: "Flood Inundation Area Results for Polygons",
        description: "New Network Results Polygon (2D) fields: 'Area flooded to inundation depth' (time varying, max, min) and 'Total area flooded' calculated from mesh elements exceeding inundation threshold. Available for Results Analysis Polygons.",
        category: "Results"
      },
      {
        id: "5.5-sediment-results",
        title: "Enhanced 2D Suspended Sediment Results",
        description: "New 2D zone results fields: sediment depth, volumetric erosion rate, dimensionless concentration, and deposited sediment depth (per fraction and total). Flooding Section Window now displays time-varying active layer level instead of fixed ground level.",
        category: "Water Quality"
      },
      {
        id: "5.5-bedload-transport",
        title: "2D Bed Load Sediment Transport",
        description: "New bed load sediment transport modeling in 2D networks via 'Model 2D bed load' option in QM Parameters Dialog with water quality and sediment parameters for erosion-deposition calculations.",
        category: "Water Quality"
      },
      {
        id: "5.5-chinese-rainfall",
        title: "Chinese Rainfall Generator",
        description: "New design rainfall generator for Chinese catchments based on Keifer and Chu (1957) approach, producing rainfall profiles suitable for Chinese design standards.",
        category: "Hydrology"
      },
      {
        id: "5.5-refh-graph-improvement",
        title: "ReFH/FEH Rainfall Generator Multi-Catchment Graphing",
        description: "ReFH/FEH design rainfall now supports graphing multiple catchments with user selection, extending beyond previous single-catchment limitation.",
        category: "Hydrology"
      },
      {
        id: "5.5-custom-graphs-observed",
        title: "Custom Graphs Show Observed Data Option",
        description: "New 'Show observed' checkbox on Custom Graph View Layout page for Object per page graphs, displaying TVD connector comparison results when viewing TSDB simulations.",
        category: "Visualization"
      },
      {
        id: "5.5-2d-zone-themes",
        title: "2D Zone Themes Enhancement",
        description: "GeoPlan Themes enhanced to theme 2D mesh elements without simulation results, with new fields for element area, level, roughness zone, and roughness value in Layer Theme Editor.",
        category: "Visualization"
      },
      {
        id: "5.5-swmm5-update",
        title: "SWMM5 Importer Support for v5.1.007",
        description: "SWMM5 importer updated to support EPA SWMM v5.1.007 files including Modified_Horton infiltration (imported as Horton) and conduit seepage rate (imported as infiltration loss coefficient).",
        category: "Integration"
      },
      {
        id: "5.5-gis-export-enhancements",
        title: "Comprehensive GIS Export Enhancements",
        description: "Export selected tables only option. 2D mesh export now uses elements (not triangles) with SQL expression support. Batch export of results maxima from multiple simulations. Min/Max results export to CSV format.",
        category: "Integration"
      },
      {
        id: "5.5-bank-engine-performance",
        title: "Simulation Engine Performance for Networks with Banks",
        description: "Significant efficiency improvements reducing simulation times for networks including banks, with minor numerical sensitivity differences from previous versions.",
        category: "Performance"
      },
      {
        id: "5.5-tsdb-nimrod",
        title: "Spatial TSDB NIMROD Forecast Radar Format",
        description: "NIMROD now available as forecast data file format option when configuring Spatial Time Series Databases.",
        category: "Data Management"
      },
      {
        id: "5.5-prn-housekeeping",
        title: "Improved Results Housekeeping",
        description: "PRN summary results files now automatically deleted when deleting time-varying results files for better results management.",
        category: "Data Management"
      },
      {
        id: "5.5-asset-network-selection",
        title: "Asset Network Selection Usability",
        description: "Asset groups can be dropped onto Run Query Dialog droptarget, automatically replaced by contained networks. 'Asset networks' droptarget renamed to 'Asset networks and groups'.",
        category: "Usability"
      },
      {
        id: "5.5-commit-prompting",
        title: "Commit Prompting for Version Control",
        description: "New per-user 'Prompt for commit before closing version controlled items' option encouraging regular commits to Master Database when closing modified items or InfoWorks ICM.",
        category: "Version Control"
      },
      {
        id: "5.5-bulk-delete",
        title: "Bulk Delete Database Items",
        description: "Multiple database items can be deleted simultaneously via selection in Explorer Window with right-click Delete or DELETE key (master databases only, excluding top-level database and Recycle Bin).",
        category: "Administration"
      },
      {
        id: "5.5-sql-otype",
        title: "SQL Object Type Field",
        description: "Read-only OTYPE variable and otype field option in SQL Dialog Field list for returning object types in SQL queries.",
        category: "Development"
      },
      {
        id: "5.5-icmlive-permissions",
        title: "ICMLive User Permissions Improvements",
        description: "User permissions rationalized with new Live Control Room Manager role grouping Change Manifest Mode, Set/Reset Alert Trigger, Create Manual Run, and Change Action State. Edit Manifest and Deploy Manifest roles obsoleted.",
        category: "Administration"
      },
      {
        id: "5.5-property-window-layouts",
        title: "Shared Object Property Window Layouts",
        description: "Object Properties Window layout settings now shareable across Workgroup database via 'Update all from master database' and 'Push all to master database' options with timestamps in About Box.",
        category: "Administration"
      },
      {
        id: "5.5-usability-improvements",
        title: "General Usability Improvements",
        description: "F6/Shift+F6 shortcuts for grid navigation. Optional in-place renaming toggle for tree objects. Network Object Grid Window column header tooltips. CTRL+Page Up/Down for tab switching.",
        category: "Usability"
      },
      {
        id: "5.5-integration-updates",
        title: "Integration Platform Updates",
        description: "MapXtreme 7.2 support. ArcGIS 10.3 support for ArcObjects/ArcEngine map control.",
        category: "Integration"
      }
    ]
  },
  {
    id: "5.0",
    version: "5.0",
    releaseDate: "2014-05-01",
    features: [
      {
        id: "5.0-initial-conditions",
        title: "Initial Conditions 1D Editor",
        description: "New Initial Conditions 1D tree object for assigning initial hydraulic values to nodes and river reaches at simulation start, overriding initial state simulation values when included in Schedule Hydraulic Run View.",
        category: "Modeling"
      },
      {
        id: "5.0-2d-mesh-init",
        title: "Initialize 2D Mesh from Different Mesh",
        description: "Use initial state simulations with different 2D meshes linked by 2D Zone ID, supporting re-meshed zones after small network changes without requiring mesh matching.",
        category: "Modeling"
      },
      {
        id: "5.0-sediment-transport",
        title: "2D Suspended Sediment Transport",
        description: "New erosion-deposition modeling in 2D networks via 'Model 2D erosion-deposition' option in QM Parameters Dialog with water quality and sediment parameters for erosion-deposition calculations.",
        category: "Water Quality"
      },
      {
        id: "5.0-ukwir-runoff",
        title: "UKWIR Runoff Volume Models",
        description: "UKWIRPaved and UKWIRPerv runoff volume types for runoff surfaces supporting multiple paved and pervious surfaces based on UKWIR model as replacement for New UK PR Model per UKWIR Equation Guide (2014).",
        category: "Hydrology"
      },
      {
        id: "5.0-japanese-models",
        title: "Japanese Rainfall Runoff Models",
        description: "Support for Japanese models including f1-Rsa runoff volume method, Kadoya coefficient for Quasi Linear Reservoir Method, Non-linear Storage Function Method, and Rational hydrograph method with rational formula.",
        category: "Hydrology"
      },
      {
        id: "5.0-node-inference",
        title: "Node Ground Level Inference from Mesh Elements",
        description: "New inference rule allowing node ground levels to be automatically inferred from ground level of containing mesh element.",
        category: "Tools"
      },
      {
        id: "5.0-risk-geoplan",
        title: "Risk Analysis Results in GeoPlan",
        description: "Risk analysis simulation and results now loadable in GeoPlan with viewing via themes, grid/graph tools, and network results grids for damage receptors and associated polygons (previously HTML log only).",
        category: "Results"
      },
      {
        id: "5.0-risk-polygon-areas",
        title: "Risk Analysis Polygon Area Fallback",
        description: "Risk analysis with Relative to Area damage curves now uses sum of associated polygon areas when damage receptor area is undefined.",
        category: "Modeling"
      },
      {
        id: "5.0-damage-function-csv",
        title: "Damage Function CSV Import/Export",
        description: "Enhanced Damage Function with general CSV import/export capabilities beyond previous Multi-Coloured Handbook format limitation.",
        category: "Data Management"
      },
      {
        id: "5.0-gis-batch-export",
        title: "Batch Export Time Varying Results to GIS",
        description: "Export time varying results for timestep ranges at specified intervals or for timestep lists loaded from CSV files to GIS formats.",
        category: "Integration"
      },
      {
        id: "5.0-inundation-results",
        title: "Enhanced 2D Inundation Results",
        description: "New 2D mesh summary results in Mesh Element Properties Dialog: 'Time to last inundation' and 'Total inundation duration' based on inundation mapping depth threshold from 2D Parameters Advanced tab.",
        category: "Results"
      },
      {
        id: "5.0-ground-level-results",
        title: "Ground Level Results for 2D Network Results Objects",
        description: "Mean, max, and min ground level results now available for Network Results Line (2D) and Network Results Polygon (2D) objects in results grids and property sheets.",
        category: "Results"
      },
      {
        id: "5.0-observed-rainfall-reports",
        title: "Observed Rainfall Support for RPA and Worst Case Reports",
        description: "Return Period Analysis and Worst Case reports now use observed rainfall when return period and duration available from Sub-event or Profile properties in rainfall events.",
        category: "Results"
      },
      {
        id: "5.0-sql-enhancements",
        title: "SQL Enhancements",
        description: "Subcatchments available as one-to-many link from nodes. New NL() function for newline characters and NVL(x,y) function for null value handling. DELETE FROM syntax for removing rows from object arrays with conditional filtering.",
        category: "Development"
      },
      {
        id: "5.0-inline-bank-validation",
        title: "Inline Bank Validation Improvement",
        description: "Network validation now displays errors when discharge coefficient or modular limit data missing from inline bank section data.",
        category: "Data Management"
      },
      {
        id: "5.0-preprocessing-performance",
        title: "Network Results Objects Preprocessing Performance",
        description: "Significant reduction in pre-processing time for large numbers of network results objects.",
        category: "Performance"
      },
      {
        id: "5.0-initial-state-performance",
        title: "Initial State Simulation Performance Improvements",
        description: "Reduced flexible state loading time for simulations, significantly decreasing run times particularly for large networks.",
        category: "Performance"
      },
      {
        id: "5.0-tsdb-historic-mode",
        title: "TSDB Historic Mode",
        description: "New Historic mode checkbox in TSDB Options using Run origin time as historic time, including only observed values up to origin and forecasts with earlier origins for historical data stream simulations with user edits.",
        category: "Data Management"
      },
      {
        id: "5.0-tsdb-data-sources",
        title: "TSDB iHistorian and ClearSCADA Support",
        description: "Support for iHistorian (GE Intelligent Platforms) and ClearSCADA (Schneider Electric) telemetry data source formats for scalar time series databases.",
        category: "Integration"
      },
      {
        id: "5.0-tsdb-csv-performance",
        title: "TSDB CSV Update Performance Improvements",
        description: "Enhanced TSDB update performance from CSV files with automatic separation of successfully loaded entries to 'loaded' subdirectory and failed entries to 'failed' subdirectory.",
        category: "Performance"
      },
      {
        id: "5.0-tsdb-security",
        title: "TSDB Password Security Enhancement",
        description: "Password characters in Data Sources tab of Time Series Database editor now displayed as asterisks instead of plain text.",
        category: "Administration"
      },
      {
        id: "5.0-replay-clock-enhancement",
        title: "Replay Clock Run Origin Indicator",
        description: "Blue vertical bar added to replay clock at run origin time when viewing TSDB simulation replays in Network Page.",
        category: "Usability"
      }
    ]
  },
  {
    id: "4.5",
    version: "4.5",
    releaseDate: "2013-12-01",
    features: [
      {
        id: "4.5-damage-receptors",
        title: "Damage Receptors and Functions",
        description: "New Damage Receptor point objects for structures/buildings in 2D meshes with flood duration and maximum depth results. New Damage Function database items with curves from Multi-Coloured Handbook and CD 2010 for defining flood depth-damage relationships.",
        category: "Modeling"
      },
      {
        id: "4.5-risk-analysis-run",
        title: "Risk Analysis Run with Expected Annual Damage",
        description: "Risk Analysis Run scheduler for multiple events calculating damage costs at Damage Receptors using event probability to produce Expected Annual Damage (EAD) values. Includes damage calculation timestep multiplier in 2D Parameters and subevent properties (Return period, Storm duration, Return period type) in Rainfall Events.",
        category: "Modeling"
      },
      {
        id: "4.5-spatial-rainfall-theme",
        title: "Spatial Rainfall Intensity Theme for Maximum Results",
        description: "Maximum spatial rainfall intensity now displayed using rainfall theme when showing maximum results on GeoPlan, with status bar display of maximum intensity values.",
        category: "Visualization"
      },
      {
        id: "4.5-long-section-enhancements",
        title: "Long Section Window Enhancements",
        description: "Secondary water level line display for simulation comparisons, total head line display capability, and improved horizontal scale shown when zoomed in even without visible manholes.",
        category: "Visualization"
      },
      {
        id: "4.5-eacsd-import",
        title: "EACSD File Format Import",
        description: "New ability to import network objects from EACSD v3.2 format files including cross sections, river reach centre lines, and bank lines.",
        category: "Integration"
      },
      {
        id: "4.5-area-averaged-rainfall",
        title: "Area-Averaged Subcatchment Rainfall",
        description: "New 'Use area-averaged rain' option for subcatchments to calculate rainfall as area-average of all overlapping rainfall polygons, addressing limitations with large subcatchments and high-resolution spatial rainfall data.",
        category: "Hydrology"
      },
      {
        id: "4.5-rain-gauge-boundaries",
        title: "Enhanced Rain Gauge Boundaries",
        description: "Increased Gauge data field size in Rainfall Event properties allowing more complex Rain Gauge Boundaries with large numbers of vertices.",
        category: "Hydrology"
      },
      {
        id: "4.5-head-flow-structures",
        title: "Base Linear Structures with User-Defined Head-Flow Relationship",
        description: "New Head Unit Flow table objects for controlling flow across Base Linear Structures using user-defined head-flow relationships, with head calculated as difference between upstream water level and downstream level or crest level.",
        category: "Modeling"
      },
      {
        id: "4.5-2d-point-source-results",
        title: "2D Point Source Results",
        description: "Comprehensive results viewing for 2D point source objects via pick tools, results grids, graph reports, custom graphs, statistical reports, and CSV export with gauged results support.",
        category: "Results"
      },
      {
        id: "4.5-water-quality-results",
        title: "Enhanced Water Quality Results",
        description: "Saturated dissolved oxygen results now output for DO simulations in Time Varying Results Grid, plus new maximum results attributes for subcatchments displayed in Results Grids and Property Sheets.",
        category: "Water Quality"
      },
      {
        id: "4.5-defconloss-runoff",
        title: "Deficit and Constant Loss Runoff Model",
        description: "New DefConLoss runoff volume type based on HEC-HMS model with single soil layer subject to evaporative loss, reaching saturation capacity before infiltration and excess runoff.",
        category: "Hydrology"
      },
      {
        id: "4.5-river-section-editing",
        title: "River Line Section Editing by Offset",
        description: "New context menu options in Sections Editor for 'Edit offset' and 'Insert row at offset' allowing precise vertex editing and insertion by specified offset with linear interpolation.",
        category: "Tools"
      },
      {
        id: "4.5-network-editing-tools",
        title: "Network Editing Enhancements",
        description: "Split link option when moving node onto conduit/river reach link, plus update base linear structure crest level data from ground models using Update from Ground Model Dialog.",
        category: "Tools"
      },
      {
        id: "4.5-simulation-diagnostics",
        title: "Enhanced Simulation Diagnostics and Initialization",
        description: "New 'Exit if TVD Profile ID is not matched' diagnostic option for event validation, plus optional 'Initialise by level fill-in from outfalls' checkbox to control tide level propagation during initialization.",
        category: "Modeling"
      },
      {
        id: "4.5-validation-themes",
        title: "Validation and Theme Improvements",
        description: "Network preference changes (GIS layers, themes) no longer require validation before simulation. SQL expression themes now work without results loaded on GeoPlan.",
        category: "Usability"
      },
      {
        id: "4.5-scenario-management",
        title: "Scenario Management Enhancements",
        description: "Create new base networks from scenarios via Duplicate button in Manage Scenarios Dialog. Improved conflict resolution with Commit history button. Re-established base-scenario field links when values match. Full object commit history viewing with Show Base option for scenario objects.",
        category: "Version Control"
      },
      {
        id: "4.5-geoplan-usability",
        title: "GeoPlan Usability Improvements",
        description: "CTRL+click to show/hide multiple object layer visibility, new Selectable checkbox for unselectable layers, GIS snapping mode (press 'g' key) for snapping to GIS layer vertices, improved Previous view navigation, and adjustable custom label callout line width.",
        category: "Usability"
      },
      {
        id: "4.5-custom-reports-sql",
        title: "Custom Reports and SQL Enhancements",
        description: "Support for .xlsm format custom report templates (Excel 2007+). New SQL FIXED function for converting numbers to strings with fixed decimal places (0-8) with rounding.",
        category: "Development"
      },
      {
        id: "4.5-gpu-improvements",
        title: "GPU Engine Water Quality Support",
        description: "GPU engine now supports water quality results for network results objects, expanding GPU-accelerated capabilities beyond hydraulics.",
        category: "Performance"
      },
      {
        id: "4.5-job-submission",
        title: "Job Submission and Control Improvements",
        description: "Redesigned Simulation/Job Control and Progress Windows with job type column and enhanced tooltips. Renamed dialogs and fields to support different job types beyond simulations.",
        category: "Administration"
      },
      {
        id: "4.5-tsdb-enhancements",
        title: "Time Series Database (TSDB) Enhancements",
        description: "User permission controls at action level (Owner, Editor, User, Viewer). Update TSDB from external sources with background processing. Use historic TSDB versions in runs via TSDB version time selection in run scheduler.",
        category: "Administration"
      },
      {
        id: "4.5-integration-updates",
        title: "Integration and Format Support Updates",
        description: "AutoCAD 2014 format support for import/export. ArcGIS 10.2 support with ArcObjects map control. UTF-8 encoding for CSV network data import/export supporting non-Western Latin characters.",
        category: "Integration"
      },
      {
        id: "4.5-soft-licensing",
        title: "Soft Licensing System",
        description: "New flexible soft licence authorization alternative to dongles with check-out/check-in capability and on-demand network licences from floating server. Configured via Licence Setup Wizard with support for working offline or remotely.",
        category: "Administration"
      }
    ]
  },
  {
    id: "4.0",
    version: "4.0",
    releaseDate: "2013-06-01",
    features: [
      {
        id: "4.0-spatial-bookmarks",
        title: "Spatial Bookmarks",
        description: "New named markers to identify and save zoom extents for particular locations or object selections, displayed in Spatial Bookmarks Window for quick navigation to saved views around the network.",
        category: "Usability"
      },
      {
        id: "4.0-print-layouts",
        title: "Print Layout Enhancements",
        description: "Extended print layouts with new frame types (Graph, Grid, Flag, Locator, Scale) and batch printing capability from Spatial Bookmarks for multiple bookmarked views.",
        category: "Usability"
      },
      {
        id: "4.0-data-flags",
        title: "Data Flags Window",
        description: "New dockable window displaying all Data Flags in the current master database for improved data quality management.",
        category: "Usability"
      },
      {
        id: "4.0-proximity-trace",
        title: "Proximity Trace Enhancements",
        description: "Enhanced proximity search with selection-only search option, checkbox selection for snapping objects, bidirectional snap (link-to-node or node-to-link), and vertex-only search mode.",
        category: "Tools"
      },
      {
        id: "4.0-saved-states",
        title: "Flexible Saved State Initialization",
        description: "Greater flexibility allowing saved states to initialize simulations using different networks, versions, and scenarios from those used to generate the saved state.",
        category: "Modeling"
      },
      {
        id: "4.0-pdm-runoff",
        title: "Probability Distributed Model (PDM) Runoff Surface",
        description: "New PDM runoff volume type with PDM Descriptor objects for rainfall-runoff parameters, subcatchment association, and RS network data import support. Also supports baseflow and soil moisture deficit modeling with SRM.",
        category: "Hydrology"
      },
      {
        id: "4.0-srm-runoff",
        title: "Simple Runoff Model (SRM) Runoff Surface",
        description: "New SRM runoff volume type using soil moisture deficit time series with constant runoff coefficient for effective rainfall calculation, applied to simplified PDM model with double linear reservoir routing. Includes soil moisture deficit profiles in Rainfall Events.",
        category: "Hydrology"
      },
      {
        id: "4.0-temperature-profiles",
        title: "Multiple Temperature Profiles in Rainfall Events",
        description: "Support for multiple temperature profiles in Rainfall Events for snow melt and PDM runoff modeling, with profile ID matching to rainfall gauges or single profile applied to all gauges.",
        category: "Hydrology"
      },
      {
        id: "4.0-line-extension",
        title: "Line Object Extension with Edit Geometry Tool",
        description: "New capability to extend line objects by adding vertices to beginning or end using edit geometry tool with CTRL+click functionality.",
        category: "Tools"
      },
      {
        id: "4.0-ground-model-sampling",
        title: "Ground Model Sampling Tool Enhancements",
        description: "Comprehensive improvements including 'Do not insert vertices between existing vertices' option for river lines, level-area value sampling for storage/pond nodes, and ground model selection box in Update from Ground Model Dialog.",
        category: "Tools"
      },
      {
        id: "4.0-breach-display",
        title: "Breach Display Improvements",
        description: "Enhanced breach visualization with varying bank level trace in Cross Section Window, elevation reporting for all vertices in Base Linear Structure results, and varying elevations displayed in 3D Network Window for banks and linear structures with breaches.",
        category: "Visualization"
      },
      {
        id: "4.0-overtopping-flow",
        title: "Overtopping Flow Calculation Method Selection",
        description: "New Overtopping flow type field for 2D sluices and bridges allowing selection between Free (fully free) and Controlled (fully controlled) flow calculation methods to address oscillation issues.",
        category: "Modeling"
      },
      {
        id: "4.0-river-validation",
        title: "River Reach Validation Improvements",
        description: "New validation warnings for inconsistent river reach geometry when River Lines or river reach sections/banks have x,y geometry changes after reach or boundary construction.",
        category: "Data Management"
      },
      {
        id: "4.0-flood-theme-performance",
        title: "Flood Theme Performance Enhancement",
        description: "Water level interpolation now only performed when flood theme is turned on, significantly speeding up Ground Model loading in simulation results for large models.",
        category: "Performance"
      },
      {
        id: "4.0-tsdb-deletion",
        title: "Historical Time Series Data Deletion",
        description: "New capability to delete historical data from time series databases with deletion upper limit settings and option to keep latest value versions even if unused in simulations.",
        category: "Data Management"
      },
      {
        id: "4.0-mesh-element-dialog",
        title: "2D Mesh Element Properties Dialog Improvements",
        description: "Enhanced modeless dialog allowing simultaneous work in other interface parts, multiple dialogs open at once, auto-updating element results grid during replay, Find in GeoPlan button, and access from 2D zone property sheet.",
        category: "Usability"
      },
      {
        id: "4.0-label-suppression",
        title: "Rotated Link Label Clash Suppression",
        description: "Rotate Link Labels and Suppress Clashing Labels options now work together, preventing overlapping rotated labels on GeoPlan.",
        category: "Visualization"
      },
      {
        id: "4.0-commit-history",
        title: "Commit History Performance Improvement",
        description: "Commit History Dialog now displays most recent 100 commits by default with Show More (next 100) and Show All buttons for faster viewing of networks with large commit histories.",
        category: "Performance"
      },
      {
        id: "4.0-toolbar-split",
        title: "Windows Toolbar Split",
        description: "Windows toolbar divided into separate Windows Toolbar (network data windows) and Docking Windows Toolbar (docking windows control) for improved usability.",
        category: "Usability"
      },
      {
        id: "4.0-mapxtreme-upgrade",
        title: "MapXtreme 7.1 Upgrade with WMS 1.3 Support",
        description: "Upgrade to MapXtreme 7.1 enabling WMS version 1.3 image loading onto GeoPlan as background layers when using MapXtreme map control.",
        category: "Integration"
      }
    ]
  },
  {
    id: "3.5",
    version: "3.5",
    releaseDate: "2013-02-01",
    features: [
      {
        id: "3.5-tsdb",
        title: "Time Series Database (TSDB) Support for Live Data",
        description: "New Scalar and Spatial Time Series Databases providing intermediate store between external data sources (SCADA/telemetry/RADAR) and simulations. Supports multiple formats (Grib1/2, NEXRAD, NIMROD, shapefile, X-MP) with Spatial Rain Zones and Spatial Rain Sources for priority control and area restriction.",
        category: "Data Management"
      },
      {
        id: "3.5-regulator-events",
        title: "Regulator Events",
        description: "New event type for direct and indirect control of regulator structures including weir crest levels, pump switching, and pump speed, usable instead of or to override Real Time Control (RTC).",
        category: "Modeling"
      },
      {
        id: "3.5-manual-breaches",
        title: "Manual Breaches in Banks and Linear Structures",
        description: "New capability to model manual breaches in river reach banks, inline banks, and 2D base linear structures using RTC definitions to specify vertical movement of points along structures with respect to time.",
        category: "Modeling"
      },
      {
        id: "3.5-2d-structures",
        title: "Enhanced 2D Linear Structures",
        description: "New Bridge Linear Structure (2D) objects for bridge opening/deck dimensions and discharge coefficients, plus new Flow type field for 2D sluice structures to select flow calculation method with backward compatibility support.",
        category: "Modeling"
      },
      {
        id: "3.5-h2s-modeling",
        title: "Hydrogen Sulphide (H2S) Modeling",
        description: "New water quality process to model H2S buildup in pipes and closed nodes when BOD is modeled, expanding water quality simulation capabilities.",
        category: "Water Quality"
      },
      {
        id: "3.5-fhwa-headloss",
        title: "FHWA Headloss Type",
        description: "New built-in headloss type based on Federal Highway Administration Inlet and Access Hole Energy Loss Method (FHWA HEC 22 Urban Drainage Manual) for closed conduits connected to manholes with new Benching method field for nodes.",
        category: "Modeling"
      },
      {
        id: "3.5-episode-eva",
        title: "Episode Collections and Extreme Value Analysis",
        description: "New Episode Collection database items for storing/viewing event start/end times with automatic generation from exceedance statistics, CSV import, or manual editing. New Extreme Value Analysis Custom Graph fits statistical distributions to peak values from simulation results and Episode Collections.",
        category: "Results"
      },
      {
        id: "3.5-cross-section-banks",
        title: "Cross Section Tool Water Level Display for Banks",
        description: "Enhanced cross section pick tool to display graph traces for water levels and ground levels on each side of river reach banks with color and visibility options.",
        category: "Visualization"
      },
      {
        id: "3.5-hecras-export",
        title: "HEC-RAS Network Export",
        description: "New ability to export network objects to HEC-RAS geometry files including river reaches, storage areas, and partial bridge export, complementing existing import functionality.",
        category: "Integration"
      },
      {
        id: "3.5-rtc-seconds",
        title: "RTC Time Controls in Seconds",
        description: "RTC Window Editor and RTC Grid Editor enhanced to allow time specification in hh:mm:ss format instead of previous hh:mm minute-precision format.",
        category: "Modeling"
      },
      {
        id: "3.5-network-results-enhancements",
        title: "Network Results Objects and 2D Linear Structures Integration",
        description: "Comprehensive integration enabling network results objects and 2D linear structures in graph reports, custom graphs, and statistical reports. Water quality results now available from 2D network results objects, with bridge opening association for 1D network results points.",
        category: "Results"
      },
      {
        id: "3.5-gauging-expansion",
        title: "Expanded Object Gauging",
        description: "Gauging capability extended beyond links to include nodes, subcatchments, network results objects, and 2D linear structures with results stored at more frequent gauge timestep.",
        category: "Results"
      },
      {
        id: "3.5-initial-state-time",
        title: "Run Scheduler Initial State Time Option",
        description: "New 'Start running from state time' option allowing simulations to start from initial state save time with automatic result merging from initial state and current simulations based on time relationships.",
        category: "Modeling"
      },
      {
        id: "3.5-engine-performance",
        title: "Engine Performance Enhancements",
        description: "Significant performance improvements including faster 1D hydraulic simulation code, reduced 2D network load times, and optimized GPU/CPU data exchange for 2D GPU simulations, particularly benefiting large networks.",
        category: "Performance"
      },
      {
        id: "3.5-gpu-improvements",
        title: "GPU Engine Expanded Support",
        description: "GPU engine now supports Network Results Objects and all 2D linear structures (Base, Sluice, and Bridge Linear Structures), previously only available on CPU engine.",
        category: "Performance"
      },
      {
        id: "3.5-print-layouts",
        title: "Print Layouts",
        description: "New flexible print layout system with Print Layout View for arranging frames of different content types (GeoPlan, Text, Image) on pages with saveable templates for customized printed output.",
        category: "Usability"
      },
      {
        id: "3.5-custom-actions",
        title: "Custom Actions",
        description: "New user and shared custom actions as shortcuts for regularly performed network tasks, emulating tree/workspace object drops or associating Ruby scripts, accessible via Actions Menu or Custom Actions Toolbars.",
        category: "Development"
      },
      {
        id: "3.5-sql-enhancements",
        title: "SQL Spatial Query Enhancements",
        description: "Spatial queries now possible between any two network layers or between network and background layers (not just GIS layers). SQL Dialog improvements include alphabetical field sorting and cursor-location field insertion with new 'spatial.' prefix replacing 'gislayer.' (backward compatible).",
        category: "Development"
      },
      {
        id: "3.5-gis-usability",
        title: "GeoPlan and GIS Usability Improvements",
        description: "Distance Tool snap mode, auto-label hiding for invisible objects, shapefile export with projection files, ArcGIS Server 10.1 REST interface support, grid filters saved in workspaces, validation property sheet display, and re-sizable dialogs (GeoPlan Find, Layer Theme Editor, GIS Layer Information).",
        category: "Usability"
      }
    ]
  },
  {
    id: "3.0",
    version: "3.0",
    releaseDate: "2012-08-01",
    features: [
      {
        id: "3.0-hecras-import",
        title: "HEC-RAS File Import",
        description: "New ability to import network objects from HEC-RAS geometry files including cross sections, interpolate sections, river reaches, storage areas, lateral structures, and partial bridge import.",
        category: "Data Management"
      },
      {
        id: "3.0-cross-section-window",
        title: "Cross Section Window",
        description: "New modeless Cross Section Window with toolbar button allowing real-time visualization of water level changes for river sections, banks, bridges, and inline banks during simulation replay without blocking software control.",
        category: "Visualization"
      },
      {
        id: "3.0-multiple-catchments",
        title: "Multiple ReFH/FEH Catchments",
        description: "ReFH and FEH design rainfall generators updated to support multiple catchments in single rainfall event with profile viewing and rain gauge boundary association for each catchment.",
        category: "Hydrology"
      },
      {
        id: "3.0-network-results",
        title: "Network Results Objects",
        description: "New network results point/line/polygon objects for interrogating 1D and 2D results with simulation engine-generated data providing more accurate results than previous Results Analysis Objects.",
        category: "Results"
      },
      {
        id: "3.0-resample-elevations",
        title: "Resample 2D Zone Elevations Without Re-meshing",
        description: "New functionality to recalculate ground levels of 2D mesh elements by sampling ground models without requiring complete zone re-meshing.",
        category: "Meshing"
      },
      {
        id: "3.0-mesh-zone-modifications",
        title: "Mesh Zone Ground Level Modifications at Meshing Time",
        description: "Ground level adjustments in mesh zones now performed during meshing instead of simulation time, allowing visualization in 3D Network Window and properties dialogs for both models and results.",
        category: "Meshing"
      },
      {
        id: "3.0-2d-structures",
        title: "Enhanced 2D Linear Structures",
        description: "New Blockage field for 2D linear weir structures to specify blocked proportions, plus new Sluice Linear Structure (2D) objects for defining sluice gates with dimensions, coefficients, and positioning.",
        category: "Modeling"
      },
      {
        id: "3.0-water-quality",
        title: "Advanced Water Quality Modeling",
        description: "Comprehensive water quality enhancements including algae (dissolved/attached), macrophytes, silicate, adsorbed phosphorus, solar radiation, and detrital pollutants modeling with performance improvements for dissolved oxygen calculations.",
        category: "Water Quality"
      },
      {
        id: "3.0-pollutograph-csv",
        title: "Pollutograph CSV Export/Import",
        description: "New ability to export/import pollutograph data to/from InfoWorks format CSV files for each determinant, enabling data exchange and pollutograph creation/updates.",
        category: "Data Management"
      },
      {
        id: "3.0-autocad-annotations",
        title: "AutoCAD Annotation and Distance Tools",
        description: "Import AutoCAD text annotations via general lines with custom autolabels for display, new Make Measured Length tool for geometry adjustment, arrow style property for line objects, and AutoCAD 2013 format support.",
        category: "Integration"
      },
      {
        id: "3.0-simulation-enhancements",
        title: "Simulation State and Control Enhancements",
        description: "Save simulation states at specified time/date (not just end state), optional rainfall smoothing control, and Message Log Window for tracking all popup messages since application start.",
        category: "Modeling"
      },
      {
        id: "3.0-gpu-improvements",
        title: "GPU Functionality Improvements",
        description: "Enhanced GPU support with improved feedback in simulation logs and progress window, GPU engine support for 2D infiltration, and detailed 2D timestep feedback including minimum timestep location and element ID.",
        category: "Performance"
      },
      {
        id: "3.0-2d-compression",
        title: "2D Zone Mesh Data Compression",
        description: "2D zone mesh data now compressed when stored in networks, significantly reducing storage space for large 2D zones and speeding up version control operations.",
        category: "Performance"
      },
      {
        id: "3.0-workflow-improvements",
        title: "Workflow and Usability Improvements",
        description: "Drag and drop model groups to networks, scenario/version selection when exporting networks, append to existing data option in Open Data Export Centre, and system theme fonts option.",
        category: "Usability"
      },
      {
        id: "3.0-sql-enhancements",
        title: "SQL Enhancements",
        description: "New GAMMALN function, date/time processing functions (NUMTOMONTHNAME, TODATE, TODATETIME), boolean support in prompt grids, and display precision control for SQL values in labels.",
        category: "Development"
      },
      {
        id: "3.0-long-section",
        title: "Long Section Enhancements",
        description: "Horizontal grid lines display option, new chainage type options (Specified/Geographical/Schematic), improved null elevation handling, enhanced flood section display with path visualization, and improved AutoCAD DWG export.",
        category: "Visualization"
      },
      {
        id: "3.0-graphing",
        title: "Comprehensive Graphing Enhancements",
        description: "Persistent page orientation, customizable time axis labels, Y-axis decimal precision control, axis scaling in defaults, interpolated values in tooltips, auto-label traces at simulation time, custom font/size for graph keys, and custom graph properties dialog.",
        category: "Visualization"
      },
      {
        id: "3.0-navigation",
        title: "Navigation and Display Improvements",
        description: "Show all in grid navigation option for connected/related objects, increased coordinate precision in status bar (up to 6 decimal places), improved graph printing with point/pixel unit selection.",
        category: "Usability"
      },
      {
        id: "3.0-database-compatibility",
        title: "Database Version Compatibility",
        description: "Ability to open version 2.0 and 2.5 databases read-only without updating, allowing objects to be copied to current master database while maintaining backward compatibility.",
        category: "Data Management"
      }
    ]
  },
  {
    id: "2.5",
    version: "2.5",
    releaseDate: "2012-02-01",
    features: [
      {
        id: "2.5-polygon-tools",
        title: "Enhanced Polygon and Polyline Tools",
        description: "Polygon cropping tool extended to include polylines, allowing all polygon and polyline objects to be cropped against each other. New Close Gaps and Overlaps tool for cleaning up polygons/polylines prior to 2D meshing.",
        category: "Modeling"
      },
      {
        id: "2.5-linear-structures",
        title: "2D Linear Structure Objects",
        description: "New Linear Structure (2D) object for representing wall and weir structures in 2D simulations, superseding the Porous Wall object (retained for backwards compatibility).",
        category: "Modeling"
      },
      {
        id: "2.5-general-point",
        title: "General Point Object",
        description: "New General Point object for storing surveyed point data to provide elevation data when creating TIN ground models.",
        category: "Data Management"
      },
      {
        id: "2.5-inlet-types",
        title: "New Inlet Types",
        description: "New UPC Grate inlet type (from Universitat Politècnica de Catalunya) as alternative to HEC-22 continuous grate, plus new Inlet 2D flood type allowing head discharge relationships between manholes and 2D mesh.",
        category: "Modeling"
      },
      {
        id: "2.5-grid-organization",
        title: "Network Object Grid Window Reorganization",
        description: "Grid windows reorganized by geometry types with new Lines and Points grids added, 2D grid removed with objects moved to Polygons/Lines/Points grids, River Lines grid consolidated into Lines grid.",
        category: "Usability"
      },
      {
        id: "2.5-rs-import",
        title: "Enhanced RS CSV Importer",
        description: "Expanded InfoWorks RS CSV import to include subcatchments, conduits (circular/rectangular/sprung arch), weirs, culvert inlets/outlets, open orifices, floodplain sections, and vertical sluices.",
        category: "Data Management"
      },
      {
        id: "2.5-agent-meshing",
        title: "Improved Simulation Agent Meshing",
        description: "Agent mesher enhanced to support GIS files and layers in meshing process, completely replacing old 'online' method that blocked UI during meshing. Includes more accurate ground level interpolation with sampling within triangles.",
        category: "Meshing"
      },
      {
        id: "2.5-terrain-sensitive",
        title: "Terrain-Sensitive Meshing",
        description: "New terrain-sensitive meshing option for 2D zones to increase mesh resolution in areas with large height variation while maintaining lower resolution in flat areas using iterative triangle splitting based on maximum height variation.",
        category: "Meshing"
      },
      {
        id: "2.5-2d-performance",
        title: "2D Engine Performance Enhancements",
        description: "Major performance improvements including spatial sorting of mesh triangles during meshing for memory clustering, aggregation of virtual element faces to reduce operations per timestep, and optimized bank connection activation.",
        category: "Performance"
      },
      {
        id: "2.5-custom-labels",
        title: "River Section and 2D Element Results in Custom Labels",
        description: "Custom labeling now supports river reach sections/banks and 2D zone mesh elements with sub-object results fields available in Custom Label Settings.",
        category: "Results"
      },
      {
        id: "2.5-ui-tools",
        title: "UI and Usability Enhancements",
        description: "New Move Selection tool for dragging objects on GeoPlan, adjustable field name width in Object Properties Window, scale bar display toggle option, and improved recycle bin with deletion date and user information.",
        category: "Usability"
      },
      {
        id: "2.5-version-control",
        title: "Version Control Branch Deletion",
        description: "Ability to delete branches of version controlled items (networks, etc.) by sending them to Recycle Bin via Explorer Window context menu.",
        category: "Version Control"
      },
      {
        id: "2.5-standalone-2d",
        title: "Standalone 2D Simulations",
        description: "2D simulations can now run without requiring a 1D network to be present, enabling pure 2D-only modeling.",
        category: "Modeling"
      },
      {
        id: "2.5-simulation-params",
        title: "Enhanced Simulation Parameters",
        description: "New 'Use 2D elevations instead of depths' parameter to handle ground level discrepancies between manholes and 2D mesh, preventing oscillating flows. Option to use initial states regardless of boundary condition matching.",
        category: "Modeling"
      },
      {
        id: "2.5-water-quality-init",
        title: "Water Quality Initialization Changes",
        description: "Number of initial state steps default changed from 3 to -1 (no initialization) as use of values > 0 is deprecated. Runoff-only simulation states can no longer be saved or used as initial states.",
        category: "Water Quality"
      },
      {
        id: "2.5-gauge-changes",
        title: "Automatic Gauging Changes",
        description: "Links connected to outfalls no longer automatically gauged to prevent unnecessary result data generation. Gauge results only generated for links in Additional Links to be Gauged selection list.",
        category: "Results"
      },
      {
        id: "2.5-log-enhancements",
        title: "Simulation Log File Enhancements",
        description: "Improved logging with unconverged object counts in timestep logs, better composite object reporting with meaningful suffixes, conditional 2D volume balance linkage errors, and enhanced 2D network loading feedback.",
        category: "Performance"
      },
      {
        id: "2.5-local-steady-state",
        title: "Local Steady State Detection",
        description: "2D engine now checks for local steady state in individual mesh elements rather than global zone-wide state, significantly improving simulation speed for large zones with independent flooded areas.",
        category: "Performance"
      },
      {
        id: "2.5-engine-improvements",
        title: "Simulation Engine Improvements",
        description: "New weir-based model for flood type 'Lost' improving stability and accuracy, improved conveyance calculations for Colebrook-White roughness removing pipe slope assumptions, and double precision for 2D level/depth initial conditions.",
        category: "Performance"
      },
      {
        id: "2.5-gis-enhancements",
        title: "GIS and Mapping Enhancements",
        description: "Web Map Service (WMS) images supported in MapXtreme GeoPlans, geographic coordinate transformations for ArcObjects/ArcEngine, feature dataset support in ArcObjects, and US survey feet option for gridded ground models.",
        category: "Integration"
      },
      {
        id: "2.5-autofilter",
        title: "Autofilter in Grid Windows",
        description: "Network object grid windows now support autofiltering with up to two simultaneous filters, allowing selective data display using comparison operators and values via new Filter Options dialog.",
        category: "Usability"
      }
    ]
  },
  {
    id: "2.0",
    version: "2.0",
    releaseDate: "2011-08-01",
    features: [
      {
        id: "2.0-workgroup-data-server",
        title: "Workgroup Coordinator Renamed to Workgroup Data Server",
        description: "Workgroup Coordinator renamed to Workgroup Data Server to avoid confusion with simulation agent coordinator.",
        category: "Tools"
      },
      {
        id: "2.0-check-for-updates",
        title: "Check for Updates from Help Menu",
        description: "New Check for updates option in Help Menu opens Innovyze Website product updates page displaying latest software version for download.",
        category: "Usability"
      },
      {
        id: "2.0-side-by-side-installation",
        title: "Side-by-Side Installation of Workgroup Client and Agent",
        description: "Major versions 1.5, 2.0 and later of Innovyze Workgroup Client and InfoWorks ICM agent can now be installed and used side-by-side. Agent service runs most recently installed version but can execute simulations for both current and older versions using matching simulation engine versions. Remote agents with multiple versions can serve clients with matching versions.",
        category: "Tools"
      },
      {
        id: "2.0-multi-threading-control",
        title: "Multi-threading Control for Simulation Jobs",
        description: "Limit can be set on number of threads per individual simulation job and/or total threads for all concurrent jobs on an agent. Default limits total threads to number of cores and shares equally between concurrent jobs. Per-job limit set in Schedule Hydraulic Run View, per-agent limit in Agent Options dialog.",
        category: "Performance"
      },
      {
        id: "2.0-agent-network-shares",
        title: "Improved Simulation Agent with Databases on Network Shares",
        description: "Agent Manager now connects to database and runs simulations under User's account (not service account), allowing agent to read/write databases and results on network shares accessible to user without further configuration. Only works with default local pipe connection method (not TCP/IP). Coordinator may still need configuration for shared results on network shares.",
        category: "Tools"
      },
      {
        id: "2.0-automatic-phase-in",
        title: "Automatic Adjustment of Phase-in Time",
        description: "Simulation engine now performs up to five initialisation phases to reduce initialisation failures in large river models. Each time initialisation fails, phase-in time multiplied by factor of 10 and restarted from initial dry condition.",
        category: "Modeling"
      },
      {
        id: "2.0-culvert-engine-update",
        title: "Engine Update for Culvert Inlets and Outlets",
        description: "Simulation engine updated to better represent culvert behavior in accordance with CIRIA Funders Report/CP/40 Hydraulic design of culverts, 1996. Technical note on Representation of Culverts in InfoWorks with worked examples added to help.",
        category: "Modeling"
      },
      {
        id: "2.0-bank-flow-stability",
        title: "Bank Flow Stability Improvement",
        description: "Bank flows now calculated once solution is converged to improve consistency between 1D and 2D model components. Previously calculated at solution of previous iteration.",
        category: "Performance"
      },
      {
        id: "2.0-2d-sleep-mode",
        title: "2D Engine Performance Improvement - Sleep Mode",
        description: "2D engine puts individual zones in 'sleep mode' when steady state reached in zone. Zone becomes active again only when input data variations or variable changes are large enough to disturb steady state. Potential for significant simulation time reduction in networks with zones reaching steady state.",
        category: "Performance"
      },
      {
        id: "2.0-licence-in-log",
        title: "Licence Number Information in Simulation Log File",
        description: "Licence number used by simulation engine now reported in simulation log file to aid diagnosing run failures caused by node size or licence type limits.",
        category: "Tools"
      },
      {
        id: "2.0-2d-minor-timesteps",
        title: "Option to Perform 2D Calculations at Minor Timesteps",
        description: "New Link 1D and 2D calculations at minor timestep option on Advanced tab of 2D Parameters Dialog performs 2D calculations at every minor timestep (unchecked by default - performs at every run timestep). May help reduce oscillations at banks in some networks.",
        category: "Modeling"
      },
      {
        id: "2.0-inline-bank-object",
        title: "New Inline Bank Object",
        description: "New control object models in-line flows between 1D and 2D networks. Modelled as zero-length link with geo-referenced section data. Connect to 2D zone via outfall node inside zone. Flow distributed between mesh elements touching bank section calculated same as River Reach Bank Flow. Can also function as geo-referenced Irregular Weir for 1D in-line flows.",
        category: "Modeling"
      },
      {
        id: "2.0-rs-csv-importer",
        title: "Enhancements to RS CSV Importer",
        description: "InfoWorks RS CSV import extended to support partial import of RS USBPR bridges. In-line spills previously imported as Irregular Weir and Bank Line objects now imported as Inline Bank and Bank Line objects.",
        category: "Data Management"
      },
      {
        id: "2.0-water-quality-features",
        title: "New Water Quality Features",
        description: "Comprehensive water quality modeling enhancements: (1) New determinants - dissolved oxygen (DO), nitrite (NO2), nitrate (NO3), pH (PH), salt (SAL), water temperature (TW), and coliforms (COL) with updates to Water Quality Parameters, Pollutographs, Trade/Waste Water event editors, Initial Conditions 2D, and QM Parameters Dialog; (2) Decaying pollutants support - decay settings specified in new Decaying pollutants editor via Water Quality Parameters property sheet; (3) Built-in processes - dissolved oxygen and temperature parameters specified in new fields in Water Quality Parameters; (4) User defined processes - parameters specified in new User defined processes editor in Water Quality Parameters; (5) Structure reaeration - reaeration coefficients can be specified for controls (excluding pumps) in new Structures editor in Water Quality Parameters property sheet.",
        category: "Water Quality"
      },
      {
        id: "2.0-lateral-inflows",
        title: "Lateral Inflows from Inflow and Pollutograph Events",
        description: "Can now apply Inflow hydrograph or Pollutograph profile to link as lateral flow. Node reference field in Profile Properties Dialog renamed to Object reference and allows link references.",
        category: "Modeling"
      },
      {
        id: "2.0-subevent-seconds",
        title: "Event Editor Enhancement - Seconds in Sub-event Start Time",
        description: "Event Editor now supports seconds in sub-event start times (not just hours and minutes). Enter start times as hh:mm:ss in Sub-event Properties Dialog.",
        category: "Usability"
      },
      {
        id: "2.0-non-normalised-shapes",
        title: "Non-normalised User-defined Shapes",
        description: "Can now enter non-normalised user-defined shapes for conduit and bridge opening cross-sections, allowing surveyed dimensions to be stored. Uncheck new Normalised option in Shape object Geometry Editor. Non-normalised shape is dimensionless - InfoWorks ICM normalises prior to simulation then multiplies by conduit/bridge opening height and width.",
        category: "Modeling"
      },
      {
        id: "2.0-rotate-cross-sections",
        title: "Ability to Rotate Cross Section Lines",
        description: "Tool added for rotating cross section lines: rotate by angle around lowest bed level point or intersection with river reach/bridge link/general line, or rotate perpendicular to river reach/bridge link about intersection point.",
        category: "Modeling"
      },
      {
        id: "2.0-interpolated-rows",
        title: "Insert Interpolated Rows in River Line Section Data Grids",
        description: "Can now insert row with values calculated by interpolating between existing values in Sections Editor grid. Right-click row and select Insert Interpolated Row Above or Below from context menu.",
        category: "Usability"
      },
      {
        id: "2.0-convert-channels",
        title: "Tool to Convert Channels to River Reaches",
        description: "Tool available to convert Channel objects to River Reach objects. Select Convert selected channels to river reaches from Model menu. Particularly useful for channel objects imported from InfoWorks CS/SD networks.",
        category: "Tools"
      },
      {
        id: "2.0-tin-network-objects",
        title: "Include Network Objects When Creating TIN Ground Models",
        description: "Can now specify selection of cross section lines, bank lines, and/or river reach objects for creating TIN ground model. Elevation data used to create new TIN vertices and treated as break lines during creation.",
        category: "Modeling"
      },
      {
        id: "2.0-object-ghosts",
        title: "Option to Turn Off Scenario 'Object Ghosts'",
        description: "Display of 'object ghosts' (objects present in base network but not current scenario shown as faded grey) can now be turned on/off from Visual Page of GeoPlan Properties Dialog. Visual effects of 2D elements and river reach section/bank lines moved to new Elements Page.",
        category: "Usability"
      },
      {
        id: "2.0-notes-in-grids",
        title: "Notes Field Added to Grid Views",
        description: "Notes field for network objects now added to grid views (previously only visible in property sheet). First few characters visible in grid view with button to open Notes editor for full text.",
        category: "Usability"
      },
      {
        id: "2.0-offline-meshing",
        title: "2D Meshing Using Simulation Agent",
        description: "Can now perform meshing 'offline' using simulation agent. Each zone meshed as 'mesh job' in simulation queue. Mesh jobs run on local and remote agents. 64-bit edition uses 64-bit engine for offline meshing, allowing larger and more complex meshes than 32-bit online meshing. Enable via Do meshing offline using simulation agent option on Mesh 2D Zones Dialog.",
        category: "Tools"
      },
      {
        id: "2.0-mesh-zone-filtering",
        title: "Mesh Zone Filtering During 2D Meshing Removed",
        description: "All mesh zones now included in meshing process (previously zones with null Maximum Triangle Area were excluded). Allows mesh zones for ground level modifications without specifying maximum triangle area. In areas with no specified maximum, 2D zone's maximum triangle area used.",
        category: "Meshing"
      },
      {
        id: "2.0-mesh-aggregation",
        title: "2D Meshing - Improvement to Mesh Element Aggregation",
        description: "Improvements in 2D mesh element aggregation algorithm to avoid non-convex elements as much as possible. 2D engine more accurately models behavior at element interfaces with convex elements, improving local mesh results quality.",
        category: "Meshing"
      },
      {
        id: "2.0-2d-element-count",
        title: "Number of 2D Elements Displayed in Network Overview",
        description: "Number of 2D zones and 2D elements now added to Network Overview View information. Useful for checking element count hasn't exceeded current licence limit.",
        category: "Usability"
      },
      {
        id: "2.0-export-2d-triangles",
        title: "Export of 2D Mesh Triangle Geometry to CSV",
        description: "Export 2D triangles option added to Select CSV Export Options Dialog. Check to export x, y, z coordinates of triangle vertices. Each triangle exported as separate object. Note: subsequent import/update from CSV does not support importing 2D triangle data.",
        category: "Data Management"
      },
      {
        id: "2.0-reach-section-building",
        title: "Improvement to River Reach Section Building",
        description: "Functionality for building river sections from cross section lines improved. Tolerance added so cross section lines not intersecting river reach link but within 0.1 m of upstream/downstream node are included in building process. Generated reach sections translated to intersect node positions.",
        category: "Modeling"
      },
      {
        id: "2.0-bed-slope-validation",
        title: "New Engineering Validation for Bed Slope in Reaches",
        description: "New Rule 4012 validates river reach bed slope. Checks for bed slope higher than specified threshold. Bed slope calculated as (upstream section lowest bed level - downstream section lowest bed level) / distance between sections. High bed slopes may cause convergence failures - rule indicates locations for weir or break in level between reaches.",
        category: "Tools"
      },
      {
        id: "2.0-network-validation-improvements",
        title: "Improved Network Validation",
        description: "New validation checks added: Chamber floor level of 2D node must be lower than ground level (E2082). Manning n values on river reaches: zero and non-zero values must not be mixed within panel (E7811), at least one panel with non-zero values required (E7813), values should be within 0.009-0.2 (W7812), values differ by >20% within panel (W7810). Bridge opening must be referenced in bridge section data (E7815). Culvert inlet/outlet invert should match barrel conduit invert (W2553, W2580). Conduit headloss type warnings for break nodes, ponds, culvert inlets/outlets, open channels (W7785). River section distance vs minimum space step (W7814). Mesh element area less than half minimum (W2285).",
        category: "Tools"
      },
      {
        id: "2.0-3d-network-improvements",
        title: "3D Network Window Improvements",
        description: "Properties Dialog revised for greater display control. Can now toggle display of: Nodes and links (including flood cones), Storage area ground levels, River reach ground levels, 2D zone element ground levels.",
        category: "Visualization"
      },
      {
        id: "2.0-flooding-section-improvements",
        title: "Improvements to Flooding Section Window",
        description: "Ground level trace from network (e.g. mesh element ground levels within 2D zone) can now be plotted. Toggle via Show results ground level in Content page of Section Properties Dialog. Color set in Layout page. Additional options allow ground model and water level traces to be shown/hidden (previously water level trace could be obscured by ground model fill).",
        category: "Visualization"
      },
      {
        id: "2.0-advanced-caching",
        title: "Advanced Caching Option to Improve Drawing Performance",
        description: "Use advanced caching and Use file cache options added to GeoPlan Page of Options Dialog. Improve drawing performance by reducing unnecessary redraws. Significant improvements when replaying 2D results. Large networks benefit from faster drawing when moving around GeoPlan or replaying results.",
        category: "Performance"
      },
      {
        id: "2.0-arrow-drawing",
        title: "Improved Drawing of Arrows on River Reach Links",
        description: "Link theme arrow drawing on river reach links improved. Direction arrows now drawn between each pair of sections (previously single set per river reach).",
        category: "Visualization"
      },
      {
        id: "2.0-simulation-status",
        title: "Simulation Control Window - Status Description Revised",
        description: "Status of finished simulations now more accurately displayed as Ended (previously displayed as Succeeded regardless of incomplete or warnings).",
        category: "Usability"
      },
      {
        id: "2.0-hyperlinked-coordinates",
        title: "Hyperlinked Coordinates in Simulation Engine Log",
        description: "Simulation engine log improved with hyperlinks applied to x and y coordinates in warning messages. Clicking hyperlink zooms to corresponding location on current GeoPlan Window enabling quick problem location finding.",
        category: "Usability"
      },
      {
        id: "2.0-base-flow-depth-removed",
        title: "Base Flow Depth Field Removed from River Reaches",
        description: "Base flow depth field removed from River Reach objects as not used by simulation engine (inverse Preissmann slot used for base flow).",
        category: "Modeling"
      },
      {
        id: "2.0-river-bridge-tutorials",
        title: "InfoWorks ICM River and Bridge Tutorials",
        description: "Mini-tutorials detailing river and bridge model building sequence included. Lessons/instructions in InfoWorks ICM help file (F1 > Contents > InfoWorks ICM Tutorials). Sample data provided for each lesson. Tutorial example files must be installed separately. Database contains data snapshots for various stages allowing restart at any point and experimentation.",
        category: "Documentation"
      },
      {
        id: "2.0-undo-redo-list",
        title: "Dropdown List of Undo/Redo Actions",
        description: "List of undo/redo actions viewable from new button on Edit Toolbar. Click down arrow to list up to five undo and redo actions in execution order. Can undo most recent action and redo most recent undo from list. Edit menu similarly updated with improved action descriptions.",
        category: "Usability"
      },
      {
        id: "2.0-restrictive-permissions",
        title: "More Restrictive User Permissions",
        description: "Can now apply more restrictive permissions to database users. Default option for users with no specific roles can restrict viewing so objects seen in tree but not opened (only view properties action allowed). User Maintenance Dialog renamed to Users and Permissions Dialog (File | Master database settings | Users and permissions). User permissions and global database settings protection options moved to Users and Permissions Dialog. New default viewing permissions option added.",
        category: "Tools"
      },
      {
        id: "2.0-windows-groups",
        title: "User Permission Roles Using Windows Groups",
        description: "User permissions extended to allow Windows groups added as users and assigned roles for tree groups. Users who are Windows group members automatically inherit roles assigned to Windows groups plus any specific user roles.",
        category: "Tools"
      },
      {
        id: "2.0-unique-id-variable",
        title: "New Automatic Node Naming Variable for Globally Unique IDs",
        description: "New {K} variable added for automatic node ID generation. Issues absolute sequence number globally at database level ensuring no user given same sequence number, avoiding commit conflicts. Previously {C} variable ensured uniqueness only for current user and could cause commit conflicts with multiple users editing network.",
        category: "Tools"
      },
      {
        id: "2.0-edit-scenario-notes",
        title: "Edit Notes Option for Scenarios",
        description: "Can now edit scenario notes at any time using new Edit Notes button in Manage Scenarios Dialog (previously only enterable at scenario creation).",
        category: "Usability"
      },
      {
        id: "2.0-import-centre-settings",
        title: "Open Data Import Centre - Previous Source Type Settings Retained",
        description: "Open Data Import Centre Dialog now remembers most recently used source type for import and selects it next time dialog opened (previously selected set default each time).",
        category: "Usability"
      },
      {
        id: "2.0-ruby-export-filtering",
        title: "Open Data Export Centre - Ruby Script Filtering",
        description: "Open Data Export Centre can now use user-defined ruby script to filter objects during export process. Filtering usually based on data to be exported (e.g., script to filter out pipes with diameter less than specified minimum).",
        category: "Tools"
      },
      {
        id: "2.0-theme-configuration",
        title: "Improvements to GeoPlan Theme Configuration",
        description: "GeoPlan theme usability improved. Sub Theme Editor Pane layout (in Layer Theme Editor) redesigned for user-friendliness. Can now select properties for theme setup in new Properties section instead of displaying all available properties in Ranged Themes grid, making Layer Theme Editor less cluttered and easier to use.",
        category: "Usability"
      },
      {
        id: "2.0-save-grid-section",
        title: "Improvements to Saving Grid Layout and Section Properties",
        description: "Grid column layout and long section properties changes can now be saved using similar method to GeoPlan properties and themes. Properties saveable as default for particular network, default for all networks of type, or to .iws file. Section properties saved/loaded via Save and Load buttons on Section Properties Dialog. Grid layout saved/loaded via Save grid layout and Load grid layout options on Grid menu.",
        category: "Usability"
      },
      {
        id: "2.0-replay-progress-bar",
        title: "Simulation Results Progress and Jump Bar",
        description: "Simulation replay clock in GeoPlan Window enhanced. Clock now acts as replay progress bar with fill color progressing as simulation plays. Clock provides ability to jump to results: click on clock bar to display results at time corresponding to position clicked.",
        category: "Usability"
      },
      {
        id: "2.0-timestep-seconds",
        title: "Improvement to Time-varying Results Export",
        description: "Set Timestep Dialog (for export timestep when exporting results to GIS) improved. Now displays seconds part of timestep for simulations using absolute times (previously hours and minutes only), allowing more accurate export timestep specification. Replay Options Dialog also updated to display seconds for absolute times.",
        category: "Data Management"
      },
      {
        id: "2.0-new-dongles",
        title: "Introduction of New-style Dongles",
        description: "New-style dongles introduced for InfoWorks ICM. Can have more than one new style network dongle on single server. New style dongles offer greatly improved control panel for monitoring dongle and licence use. Supported from Version 12.0 onwards. All products continue working with old style dongles (pre-Version 12.0). Licence Key Setup program now runs as wizard and allows dongle options for current user and all users on machine.",
        category: "Tools"
      },
      {
        id: "2.0-arcengine-map-control",
        title: "ArcEngine Map Control Option",
        description: "Now supports ESRI ArcEngine as map control for GeoPlan Window (in addition to PBBI MapXtreme and ESRI ArcObjects). ArcEngine is cheap alternative to ArcObjects (ArcGIS/ArcView) and supports layer types: ESRI Shapefiles, CAD Layers (Points, Areas, Polygons, Polyline classes), Raster images (JPG, PNG, ECW, BIL, BMP, SID), Layer files. Dialogs relating to GIS import rationalised.",
        category: "Integration"
      },
      {
        id: "2.0-arcgis-server",
        title: "Support for ArcGIS Server Map Services",
        description: "ArcGIS Server Map Services now supported. ArcGIS Server Map layers can be displayed as background layers when using ArcObjects map control and saved in layer lists. Users can connect to remote web servers and LAN servers.",
        category: "Integration"
      },
      {
        id: "2.0-arcgis-10-compatibility",
        title: "Export to Shape File - ArcGIS 10 Compatibility Option",
        description: "New Use ArcGIS 10 compatibility option added to GIS Export Dialog when exporting to shape file. ArcGIS 10 options require single-part polygons in anti-clockwise direction. Option performs direction check on polygons ensuring all exported single-part polygons specified anti-clockwise.",
        category: "Integration"
      }
    ]
  },
  {
    id: "1.5",
    version: "1.5",
    releaseDate: "2011-02-01",
    features: [
      {
        id: "1.5-3d-display",
        title: "3D Network Window Display Improvements",
        description: "Enhanced 3D visualization with improved bridge opening display (holes cut into bridge faces) and 2D mesh elements now drawn as horizontal elements with risers for accurate representation.",
        category: "Visualization"
      },
      {
        id: "1.5-skew-bridges",
        title: "Skew Bridges",
        description: "New fields added for modeling skew bridges including Skew angle field for bridge deck angle specification and Skew openings and piers field for opening orientation.",
        category: "Modeling"
      },
      {
        id: "1.5-2d-infiltration",
        title: "2D Infiltration Model",
        description: "New 2D infiltration model allowing soil infiltration modeling in previously impervious 2D zones using Infiltration Surface objects with constant, fixed, or Horton infiltration models.",
        category: "Hydrology"
      },
      {
        id: "1.5-water-quality",
        title: "Enhanced Water Quality Modeling",
        description: "Water quality modeling now available in 2D networks with advection and diffusion of pollutants from river banks, manholes, point sources, and external boundaries. Water Quality Model also updated to support non-prismatic conduits including river reaches and bridges.",
        category: "Water Quality"
      },
      {
        id: "1.5-isis-import",
        title: "ISIS .dat File Import",
        description: "Limited support added for importing network data from ISIS .dat files including river section data and spill data with geo-referencing.",
        category: "Data Management"
      },
      {
        id: "1.5-river-reach-tools",
        title: "River Reach Building Improvements",
        description: "Major enhancements including renamed objects (Cross Section Lines, Bank Lines), editable/uneditable river data options, automatic roughness updates, cross section line generation, and join reaches tool.",
        category: "Modeling"
      },
      {
        id: "1.5-interpolation",
        title: "Enhanced Interpolation Tool",
        description: "Improved section interpolation with support for multiple sections and custom chords to map specific features between sections for better accuracy.",
        category: "Modeling"
      },
      {
        id: "1.5-section-highlighting",
        title: "Section Highlighting on GeoPlan",
        description: "River and bridge sections now temporarily highlighted on GeoPlan when opening section editors, improving usability for object identification.",
        category: "Usability"
      },
      {
        id: "1.5-polygon-tools",
        title: "Enhanced Polygon Tools",
        description: "Ability to change line/polygon types, improved crop overlapping polygons functionality supporting river reaches, bridges, storage areas, and complex polygons.",
        category: "Modeling"
      },
      {
        id: "1.5-mesh-diagnostics",
        title: "2D Mesh Diagnostics and Improvements",
        description: "New read-only Mesh summary field storing meshing information and validation warnings. Better handling of undefined elevation areas with error reporting, and element adjustment at river banks now performed during meshing instead of simulation time.",
        category: "Meshing"
      },
      {
        id: "1.5-mesh-manholes",
        title: "Improved Meshing at Manholes",
        description: "Mesh triangles now aggregated at 2D manholes with new 2D element area factor field to reduce water balance problems and improve stability.",
        category: "Meshing"
      },
      {
        id: "1.5-ground-model-display",
        title: "Ground Model Display in Section Editors",
        description: "Ground Model trace can now be displayed on all property sheet section editors when ground model is loaded onto GeoPlan.",
        category: "Visualization"
      },
      {
        id: "1.5-sql-enhancements",
        title: "SQL Enhancements",
        description: "Major SQL improvements including ORDER BY clause, DISTINCT keyword, INSERT clause, new date/trigonometric functions, object ID field support, and flags as arrays.",
        category: "Development"
      },
      {
        id: "1.5-explorer-improvements",
        title: "Explorer Window Enhancements",
        description: "Multiple improvements including version control in Find pane, ID column display, enhanced Model Group icons, and image-enhanced object creation menu.",
        category: "Usability"
      },
      {
        id: "1.5-theme-management",
        title: "Improved Theme Management",
        description: "Layer Theme Editor enhanced to allow quick addition/removal of multiple theme ranges by holding down buttons.",
        category: "Usability"
      },
      {
        id: "1.5-area-measurement",
        title: "Area Measurement Tool",
        description: "Distance Estimation Tool enhanced to measure area in addition to length using polygon formation with CTRL+double-click.",
        category: "Tools"
      },
      {
        id: "1.5-data-flags",
        title: "Enhanced Data Flag System",
        description: "Data flag codes increased from two to four characters, plus new Find and Replace Flags functionality for updating imported network flagging systems.",
        category: "Data Management"
      },
      {
        id: "1.5-selection-tools",
        title: "Selection Tool Improvements",
        description: "Double-click now displays property sheets for multiple overlapping objects, works in Long Section and 3D windows, plus Backspace shortcut to clear selections.",
        category: "Usability"
      },
      {
        id: "1.5-version-control",
        title: "Version Control Enhancements",
        description: "Optional filters in Comparison dialog (Ignore flags, Ignore defaults, Use display precision) and ability to copy commit history to clipboard.",
        category: "Version Control"
      },
      {
        id: "1.5-geoplan-improvements",
        title: "GeoPlan Enhancements",
        description: "Customizable GIS layer selection color, improved network object deletion controls with security options, and improved GeoPlan properties/themes saving.",
        category: "Usability"
      },
      {
        id: "1.5-access-import",
        title: "Enhanced Access Database Import",
        description: "Queries now available for selection in Feature dropdown list of Open Data Import Centre dialog alongside tables.",
        category: "Data Management"
      },
      {
        id: "1.5-gridded-ground-model",
        title: "Gridded Ground Model Import",
        description: "Support for importing gridded ground models from InfoWorks format .IGM files.",
        category: "Data Management"
      },
      {
        id: "1.5-user-permissions",
        title: "Emergency Reset of User Permissions",
        description: "Ability to reset user permissions for a master database and add users as administrators via emergency reset file from Innovyze.",
        category: "Administration"
      },
      {
        id: "1.5-google-earth",
        title: "Google Earth Export Enhancement",
        description: "New option to export only the currently displayed timestep when exporting to Google Earth KMZ format.",
        category: "Integration"
      }
    ]
  }
];
